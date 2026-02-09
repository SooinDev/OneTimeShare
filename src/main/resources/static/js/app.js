// Translations
const translations = {
    ko: {
        title: '일회성 데이터 공유',
        subtitle: '한 번만 볼 수 있는 안전한 데이터 공유 서비스',
        tabText: '텍스트',
        tabPassword: '비밀번호',
        tabFile: '파일',
        textPlaceholder: '공유할 텍스트를 입력하세요...',
        passwordPlaceholder: '공유할 비밀번호를 입력하세요...',
        fileUploadText: '클릭하거나 파일을 드래그하세요',
        fileUploadLimit: '최대 10MB',
        expiryLabel: '만료 시간:',
        expiry1h: '1시간',
        expiry24h: '24시간',
        expiry3d: '3일',
        expiry7d: '7일',
        createBtn: '공유 링크 생성',
        creatingBtn: '생성 중...',
        successTitle: '공유 링크가 생성되었습니다!',
        copyBtn: '복사',
        copiedBtn: '✓ 복사됨!',
        warningText: '이 링크는 한 번만 열 수 있습니다. 열람 후 자동으로 삭제됩니다.',
        createNewBtn: '새로 만들기',
        footerText: '모든 데이터는 암호화되어 저장되며 조회 시 즉시 삭제됩니다',
        sharedDataTitle: '공유된 데이터',
        sharedWarning: '이 페이지를 떠나면 데이터가 영구적으로 삭제됩니다.',
        passwordLabel: '비밀번호',
        textLabel: '텍스트',
        downloadBtn: '다운로드',
        newShareBtn: '새 공유 만들기',
        expiredTitle: '링크가 만료되었습니다',
        fileSizeError: '파일 크기는 10MB를 초과할 수 없습니다.',
        textRequired: '텍스트를 입력해주세요.',
        passwordRequired: '비밀번호를 입력해주세요.',
        fileRequired: '파일을 선택해주세요.',
        linkCopied: '링크가 클립보드에 복사되었습니다!',
        contentCopied: '내용이 클립보드에 복사되었습니다!',
        copyFailed: '복사에 실패했습니다.',
        serverError: '서버 오류가 발생했습니다.'
    },
    en: {
        title: 'One-Time Share',
        subtitle: 'Secure data sharing service that can be viewed only once',
        tabText: 'Text',
        tabPassword: 'Password',
        tabFile: 'File',
        textPlaceholder: 'Enter text to share...',
        passwordPlaceholder: 'Enter password to share...',
        fileUploadText: 'Click or drag file here',
        fileUploadLimit: 'Max 10MB',
        expiryLabel: 'Expiry Time:',
        expiry1h: '1 hour',
        expiry24h: '24 hours',
        expiry3d: '3 days',
        expiry7d: '7 days',
        createBtn: 'Create Share Link',
        creatingBtn: 'Creating...',
        successTitle: 'Share link created!',
        copyBtn: 'Copy',
        copiedBtn: '✓ Copied!',
        warningText: 'This link can only be opened once. It will be automatically deleted after viewing.',
        createNewBtn: 'Create New',
        footerText: 'All data is encrypted and deleted immediately upon viewing',
        sharedDataTitle: 'Shared Data',
        sharedWarning: 'Data will be permanently deleted when you leave this page.',
        passwordLabel: 'Password',
        textLabel: 'Text',
        downloadBtn: 'Download',
        newShareBtn: 'Create New Share',
        expiredTitle: 'Link Expired',
        fileSizeError: 'File size cannot exceed 10MB.',
        textRequired: 'Please enter text.',
        passwordRequired: 'Please enter password.',
        fileRequired: 'Please select a file.',
        linkCopied: 'Link copied to clipboard!',
        contentCopied: 'Content copied to clipboard!',
        copyFailed: 'Copy failed.',
        serverError: 'A server error occurred.'
    },
    ja: {
        title: 'ワンタイムシェア',
        subtitle: '一度だけ閲覧できる安全なデータ共有サービス',
        tabText: 'テキスト',
        tabPassword: 'パスワード',
        tabFile: 'ファイル',
        textPlaceholder: '共有するテキストを入力してください...',
        passwordPlaceholder: '共有するパスワードを入力してください...',
        fileUploadText: 'クリックまたはファイルをドラッグ',
        fileUploadLimit: '最大10MB',
        expiryLabel: '有効期限:',
        expiry1h: '1時間',
        expiry24h: '24時間',
        expiry3d: '3日',
        expiry7d: '7日',
        createBtn: '共有リンクを作成',
        creatingBtn: '作成中...',
        successTitle: '共有リンクが作成されました！',
        copyBtn: 'コピー',
        copiedBtn: '✓ コピー済み！',
        warningText: 'このリンクは一度だけ開くことができます。閲覧後は自動的に削除されます。',
        createNewBtn: '新規作成',
        footerText: 'すべてのデータは暗号化されて保存され、閲覧時に即座に削除されます',
        sharedDataTitle: '共有データ',
        sharedWarning: 'このページを離れるとデータが永久に削除されます。',
        passwordLabel: 'パスワード',
        textLabel: 'テキスト',
        downloadBtn: 'ダウンロード',
        newShareBtn: '新しい共有を作成',
        expiredTitle: 'リンクの有効期限が切れました',
        fileSizeError: 'ファイルサイズは10MBを超えることはできません。',
        textRequired: 'テキストを入力してください。',
        passwordRequired: 'パスワードを入力してください。',
        fileRequired: 'ファイルを選択してください。',
        linkCopied: 'リンクがクリップボードにコピーされました！',
        contentCopied: 'コンテンツがクリップボードにコピーされました！',
        copyFailed: 'コピーに失敗しました。',
        serverError: 'サーバーエラーが発生しました。'
    },
    zh: {
        title: '一次性分享',
        subtitle: '只能查看一次的安全数据共享服务',
        tabText: '文本',
        tabPassword: '密码',
        tabFile: '文件',
        textPlaceholder: '输入要分享的文本...',
        passwordPlaceholder: '输入要分享的密码...',
        fileUploadText: '点击或拖动文件到这里',
        fileUploadLimit: '最大10MB',
        expiryLabel: '过期时间：',
        expiry1h: '1小时',
        expiry24h: '24小时',
        expiry3d: '3天',
        expiry7d: '7天',
        createBtn: '创建分享链接',
        creatingBtn: '创建中...',
        successTitle: '分享链接已创建！',
        copyBtn: '复制',
        copiedBtn: '✓ 已复制！',
        warningText: '此链接只能打开一次。查看后将自动删除。',
        createNewBtn: '新建',
        footerText: '所有数据均经过加密存储，查看后立即删除',
        sharedDataTitle: '共享数据',
        sharedWarning: '离开此页面后数据将被永久删除。',
        passwordLabel: '密码',
        textLabel: '文本',
        downloadBtn: '下载',
        newShareBtn: '创建新分享',
        expiredTitle: '链接已过期',
        fileSizeError: '文件大小不能超过10MB。',
        textRequired: '请输入文本。',
        passwordRequired: '请输入密码。',
        fileRequired: '请选择文件。',
        linkCopied: '链接已复制到剪贴板！',
        contentCopied: '内容已复制到剪贴板！',
        copyFailed: '复制失败。',
        serverError: '发生服务器错误。'
    }
};

// Language and Theme Management
let currentLang = localStorage.getItem('language') || 'ko';
let currentTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon();
}

function toggleTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    updateLanguageDisplay();
    updatePageContent();
}

function updateLanguageDisplay() {
    const languageBtn = document.querySelector('.language-btn');
    if (languageBtn) {
        const langNames = { ko: '한국어', en: 'English', ja: '日本語', zh: '中文' };
        const langFlags = { ko: '🇰🇷', en: '🇺🇸', ja: '🇯🇵', zh: '🇨🇳' };
        languageBtn.innerHTML = `<span>${langFlags[currentLang]}</span><span>${langNames[currentLang]}</span>`;
    }

    // Update active state in dropdown
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });
}

function updatePageContent() {
    const t = translations[currentLang];

    // Update common elements
    const elements = {
        '[data-i18n="title"]': t.title,
        '[data-i18n="subtitle"]': t.subtitle,
        '[data-i18n="tabText"]': t.tabText,
        '[data-i18n="tabPassword"]': t.tabPassword,
        '[data-i18n="tabFile"]': t.tabFile,
        '[data-i18n="expiryLabel"]': t.expiryLabel,
        '[data-i18n="createBtn"]': t.createBtn,
        '[data-i18n="footerText"]': t.footerText,
        '[data-i18n="successTitle"]': t.successTitle,
        '[data-i18n="copyBtn"]': t.copyBtn,
        '[data-i18n="warningText"]': t.warningText,
        '[data-i18n="createNewBtn"]': t.createNewBtn,
        '[data-i18n="sharedDataTitle"]': t.sharedDataTitle,
        '[data-i18n="sharedWarning"]': t.sharedWarning,
        '[data-i18n="downloadBtn"]': t.downloadBtn,
        '[data-i18n="newShareBtn"]': t.newShareBtn,
        '[data-i18n="expiredTitle"]': t.expiredTitle
    };

    Object.entries(elements).forEach(([selector, text]) => {
        const element = document.querySelector(selector);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // Update placeholders
    const textContent = document.getElementById('textContent');
    if (textContent) textContent.placeholder = t.textPlaceholder;

    const passwordContent = document.getElementById('passwordContent');
    if (passwordContent) passwordContent.placeholder = t.passwordPlaceholder;

    // Update file upload text
    const uploadPlaceholder = document.querySelector('.upload-placeholder p');
    if (uploadPlaceholder) uploadPlaceholder.textContent = t.fileUploadText;

    const fileLimit = document.querySelector('.file-limit');
    if (fileLimit) fileLimit.textContent = t.fileUploadLimit;

    // Update expiry options
    const expiryOptions = document.querySelectorAll('#expiryTime option');
    if (expiryOptions.length >= 4) {
        expiryOptions[0].textContent = t.expiry1h;
        expiryOptions[1].textContent = t.expiry24h;
        expiryOptions[2].textContent = t.expiry3d;
        expiryOptions[3].textContent = t.expiry7d;
    }

    // Update content type labels
    const contentHeader = document.querySelector('.content-header span');
    if (contentHeader) {
        const isPassword = contentHeader.textContent.includes('비밀번호') ||
                          contentHeader.textContent.includes('Password') ||
                          contentHeader.textContent.includes('パスワード') ||
                          contentHeader.textContent.includes('密码');
        contentHeader.textContent = isPassword ? t.passwordLabel : t.textLabel;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme and language
    setTheme(currentTheme);
    updateLanguageDisplay();
    updatePageContent();

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Language selector
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');

    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            languageDropdown.classList.remove('active');
        });

        document.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                setLanguage(option.dataset.lang);
                languageDropdown.classList.remove('active');
            });
        });
    }
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
                    showNotification(translations[currentLang].fileSizeError, 'error');
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
                    showNotification(translations[currentLang].fileSizeError, 'error');
                    return;
                }
                uploadedFile = file;
                fileName.textContent = file.name;
                fileUploadArea.querySelector('.upload-placeholder').style.display = 'none';
                fileInfo.style.display = 'flex';
            }
        });
    }

    // 비밀번호 강도 체크 (향상된 버전)
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

            let strengthColor;
            if (strength < 40) {
                strengthColor = '#ef4444';
            } else if (strength < 70) {
                strengthColor = '#f59e0b';
            } else {
                strengthColor = '#10b981';
            }

            passwordStrength.style.setProperty('--strength-width', strength + '%');
            passwordStrength.style.setProperty('--strength-color', strengthColor);
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
                    showNotification(translations[currentLang].textRequired, 'error');
                    return;
                }
                requestData.content = content;
            } else if (activeTab === 'password') {
                const content = document.getElementById('passwordContent').value.trim();
                if (!content) {
                    showNotification(translations[currentLang].passwordRequired, 'error');
                    return;
                }
                requestData.content = content;
            } else if (activeTab === 'file') {
                if (!uploadedFile) {
                    showNotification(translations[currentLang].fileRequired, 'error');
                    return;
                }

                const fileData = await fileToBase64(uploadedFile);
                requestData.fileData = fileData;
                requestData.fileName = uploadedFile.name;
                requestData.fileType = uploadedFile.type;
            }

            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = `<span style="display: inline-flex; align-items: center; gap: 8px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" opacity="0.75"/></svg>${translations[currentLang].creatingBtn}</span>`;

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

                    // Smooth transition
                    shareForm.style.opacity = '0';
                    shareForm.style.transform = 'translateY(-20px)';
                    shareForm.style.transition = 'all 0.4s ease';

                    setTimeout(() => {
                        shareForm.style.display = 'none';
                        resultContainer.style.display = 'block';
                        resultContainer.style.opacity = '0';
                        resultContainer.style.transform = 'translateY(20px)';

                        setTimeout(() => {
                            resultContainer.style.transition = 'all 0.4s ease';
                            resultContainer.style.opacity = '1';
                            resultContainer.style.transform = 'translateY(0)';
                        }, 50);
                    }, 400);
                } else {
                    showNotification(result.message || translations[currentLang].serverError, 'error');
                }
            } catch (error) {
                showNotification(translations[currentLang].serverError, 'error');
                console.error(error);
            } finally {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                submitBtn.textContent = originalText;
            }
        });
    }

    // 복사 버튼 (향상된 버전)
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(shareUrlInput.value);

                const originalText = copyBtn.textContent;
                copyBtn.innerHTML = `<span style="display: inline-flex; align-items: center; gap: 6px;">${translations[currentLang].copiedBtn}</span>`;
                copyBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';

                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.background = '';
                }, 2000);

                showNotification(translations[currentLang].linkCopied, 'success');
            } catch (err) {
                // Fallback for older browsers
                shareUrlInput.select();
                document.execCommand('copy');
                showNotification(translations[currentLang].linkCopied, 'success');
            }
        });
    }

    // 새로 만들기 버튼
    const createNewBtn = document.getElementById('createNewBtn');
    if (createNewBtn) {
        createNewBtn.addEventListener('click', () => {
            location.reload();
        });
    }

    // 컨텐츠 복사 버튼 (향상된 버전)
    const copyContentBtns = document.querySelectorAll('.copy-content-btn');
    copyContentBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            const content = btn.dataset.content;
            try {
                await navigator.clipboard.writeText(content);
                const originalText = btn.textContent;
                btn.innerHTML = translations[currentLang].copiedBtn;
                btn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                }, 2000);

                showNotification(translations[currentLang].contentCopied, 'success');
            } catch (err) {
                showNotification(translations[currentLang].copyFailed, 'error');
            }
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

    // 애플 스타일 알림 함수
    function showNotification(message, type = 'info') {
        // 기존 알림 제거
        const existingNotification = document.querySelector('.apple-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'apple-notification';

        const bgColors = {
            success: 'rgba(52, 199, 89, 0.95)',
            error: 'rgba(255, 59, 48, 0.95)',
            info: 'rgba(0, 122, 255, 0.95)'
        };

        const darkBgColors = {
            success: 'rgba(48, 209, 88, 0.95)',
            error: 'rgba(255, 69, 58, 0.95)',
            info: 'rgba(10, 132, 255, 0.95)'
        };

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const bgColor = isDark ? darkBgColors[type] : bgColors[type];

        notification.style.cssText = `
            position: fixed;
            top: 32px;
            right: 32px;
            padding: 14px 20px;
            background: ${bgColor};
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            color: white;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1);
            font-weight: 500;
            font-size: 0.9375rem;
            z-index: 10000;
            transform: translateY(-100px) scale(0.9);
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.28, 0, 0.42, 1);
            display: flex;
            align-items: center;
            gap: 10px;
            letter-spacing: -0.003em;
            max-width: 400px;
        `;

        const icons = {
            success: '✓',
            error: '✕',
            info: 'ℹ'
        };

        notification.innerHTML = `<span style="font-size: 1.125rem;">${icons[type]}</span><span>${message}</span>`;

        document.body.appendChild(notification);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                notification.style.transform = 'translateY(0) scale(1)';
                notification.style.opacity = '1';
            });
        });

        setTimeout(() => {
            notification.style.transform = 'translateY(-20px)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // 스피너 애니메이션 및 반응형 알림 스타일 추가
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
            .apple-notification {
                right: 20px !important;
                left: 20px !important;
                max-width: none !important;
                font-size: 0.875rem !important;
            }
        }

        @media (max-width: 480px) {
            .apple-notification {
                top: 24px !important;
                right: 16px !important;
                left: 16px !important;
                padding: 12px 16px !important;
                font-size: 0.8125rem !important;
            }
        }
    `;
    document.head.appendChild(style);

    // 페이지 로드 애니메이션
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    });

    // 폼 인풋에 포커스 효과 추가
    const inputs = document.querySelectorAll('textarea, input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
});