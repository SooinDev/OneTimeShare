document.addEventListener('DOMContentLoaded', function() {
    // 탭 전환
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');
        });
    });

    // 파일 업로드
    const fileUploadArea = document.getElementById('fileUploadArea');
    const fileInput = document.getElementById('fileInput');
    const fileInfo = document.getElementById('fileInfo');
    const fileName = document.getElementById('fileName');
    const removeFileBtn = document.getElementById('removeFile');
    let uploadedFile = null;

    if (fileUploadArea) {
        fileUploadArea.addEventListener('click', () => fileInput.click());

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 10 * 1024 * 1024) {
                    alert('파일 크기는 10MB를 초과할 수 없습니다.');
                    return;
                }
                uploadedFile = file;
                fileName.textContent = file.name;
                fileUploadArea.querySelector('.upload-placeholder').style.display = 'none';
                fileInfo.style.display = 'flex';
            }
        });

        removeFileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            uploadedFile = null;
            fileInput.value = '';
            fileUploadArea.querySelector('.upload-placeholder').style.display = 'block';
            fileInfo.style.display = 'none';
        });

        // 드래그 앤 드롭
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            fileUploadArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            fileUploadArea.addEventListener(eventName, () => {
                fileUploadArea.classList.add('drag-over');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            fileUploadArea.addEventListener(eventName, () => {
                fileUploadArea.classList.remove('drag-over');
            });
        });

        fileUploadArea.addEventListener('drop', (e) => {
            const file = e.dataTransfer.files[0];
            if (file) {
                if (file.size > 10 * 1024 * 1024) {
                    alert('파일 크기는 10MB를 초과할 수 없습니다.');
                    return;
                }
                uploadedFile = file;
                fileName.textContent = file.name;
                fileUploadArea.querySelector('.upload-placeholder').style.display = 'none';
                fileInfo.style.display = 'flex';
            }
        });
    }

    // 비밀번호 강도 체크
    const passwordInput = document.getElementById('passwordContent');
    const passwordStrength = document.getElementById('passwordStrength');

    if (passwordInput) {
        passwordInput.addEventListener('input', (e) => {
            const password = e.target.value;
            let strength = 0;

            if (password.length >= 8) strength += 25;
            if (password.length >= 12) strength += 25;
            if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
            if (/[0-9]/.test(password)) strength += 15;
            if (/[^a-zA-Z0-9]/.test(password)) strength += 10;

            passwordStrength.style.width = strength + '%';

            if (strength < 40) {
                passwordStrength.style.background = '#ef4444';
            } else if (strength < 70) {
                passwordStrength.style.background = '#f59e0b';
            } else {
                passwordStrength.style.background = '#10b981';
            }
        });
    }

    // 폼 제출
    const shareForm = document.getElementById('shareForm');
    const submitBtn = document.getElementById('submitBtn');
    const resultContainer = document.getElementById('resultContainer');
    const shareUrlInput = document.getElementById('shareUrl');

    if (shareForm) {
        shareForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
            const expiresInHours = parseInt(document.getElementById('expiryTime').value);

            let requestData = {
                dataType: activeTab.toUpperCase(),
                expiresInHours: expiresInHours
            };

            if (activeTab === 'text') {
                const content = document.getElementById('textContent').value.trim();
                if (!content) {
                    alert('텍스트를 입력해주세요.');
                    return;
                }
                requestData.content = content;
            } else if (activeTab === 'password') {
                const content = document.getElementById('passwordContent').value.trim();
                if (!content) {
                    alert('비밀번호를 입력해주세요.');
                    return;
                }
                requestData.content = content;
            } else if (activeTab === 'file') {
                if (!uploadedFile) {
                    alert('파일을 선택해주세요.');
                    return;
                }

                const fileData = await fileToBase64(uploadedFile);
                requestData.fileData = fileData;
                requestData.fileName = uploadedFile.name;
                requestData.fileType = uploadedFile.type;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = '생성 중...';

            try {
                const response = await fetch('/api/share', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });

                const result = await response.json();

                if (result.success) {
                    shareUrlInput.value = result.shareUrl;
                    shareForm.style.display = 'none';
                    resultContainer.style.display = 'block';
                } else {
                    alert('오류: ' + result.message);
                }
            } catch (error) {
                alert('서버 오류가 발생했습니다.');
                console.error(error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = '공유 링크 생성';
            }
        });
    }

    // 복사 버튼
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            shareUrlInput.select();
            document.execCommand('copy');

            const originalText = copyBtn.textContent;
            copyBtn.textContent = '복사됨!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    }

    // 새로 만들기 버튼
    const createNewBtn = document.getElementById('createNewBtn');
    if (createNewBtn) {
        createNewBtn.addEventListener('click', () => {
            location.reload();
        });
    }

    // 컨텐츠 복사 버튼
    const copyContentBtns = document.querySelectorAll('.copy-content-btn');
    copyContentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.dataset.content;
            navigator.clipboard.writeText(content).then(() => {
                const originalText = btn.textContent;
                btn.textContent = '복사됨!';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            });
        });
    });

    // 파일 다운로드 버튼
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filename = btn.dataset.filename;
            const filetype = btn.dataset.filetype;
            const filedata = btn.dataset.filedata;

            const link = document.createElement('a');
            link.href = `data:${filetype};base64,${filedata}`;
            link.download = filename;
            link.click();
        });
    });

    // 파일을 Base64로 변환하는 함수
    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = error => reject(error);
        });
    }
});