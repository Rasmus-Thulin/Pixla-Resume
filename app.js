document.addEventListener('DOMContentLoaded', () => {
    const cv = document.getElementById('cv');
    const cvPages = document.getElementById('cv-pages');
    const cvWrapper = document.querySelector('.cv-wrapper');

    const formatSelect = document.getElementById('format-select');
    const layoutSelect = document.getElementById('layout-select');
    const paletteSelect = document.getElementById('palette-select');
    const fontSelect = document.getElementById('font-select');
    const backgroundSelect = document.getElementById('background-select');
    const bgImageUrlInput = document.getElementById('background-image-url-input');
    const bgImageUploadBtn = document.getElementById('background-image-upload-btn');
    const bgImageFileInput = document.getElementById('background-image-file-input');
    const bgImageOpacityInput = document.getElementById('background-image-opacity-input');
    const bgImageOpacityLbl = document.getElementById('background-image-opacity-lbl');
    const clearBgImageBtn = document.getElementById('clear-background-image-btn');
    const sectionStyleSelect = document.getElementById('section-style-select');
    const accentColorInput = document.getElementById('accent-color');
    const skillStyleSelect = document.getElementById('skill-style-select');
    const cvPrimaryColor = document.getElementById('cv-primary-color');
    const cvSecondaryColor = document.getElementById('cv-secondary-color');
    const cvBgColor = document.getElementById('cv-bg-color');
    const cvSurfaceColor = document.getElementById('cv-surface-color');
    const cvTextColor = document.getElementById('cv-text-color');
    const cvMutedColor = document.getElementById('cv-muted-color');
    const resetColorsBtn = document.getElementById('reset-colors-btn');
    // Design buttons moved to right box
    // const saveDesignBtn = document.getElementById('save-design-btn');
    // const loadDesignBtn = document.getElementById('load-design-btn');

    const boxBgColor = document.getElementById('box-background-color');
    const boxTextColor = document.getElementById('box-text-color');
    const boxBorderColor = document.getElementById('box-border-color');
    const boxStylePreset = document.getElementById('box-style-preset');
    const boxShapeSelect = document.getElementById('box-shape-select');
    const boxPaddingInput = document.getElementById('box-padding-input');
    const boxPaddingLbl = document.getElementById('box-padding-lbl');
    const boxRadiusInput = document.getElementById('box-radius-input');
    const boxRadiusLbl = document.getElementById('box-radius-lbl');
    const boxBorderWidthInput = document.getElementById('box-border-width-input');
    const boxBorderWidthLbl = document.getElementById('box-border-width-lbl');
    const boxBoldInput = document.getElementById('box-bold-input');
    const applyBoxStyleAllBtn = document.getElementById('apply-box-style-all-btn');
    const clearBoxStyleBtn = document.getElementById('clear-box-style-btn');
    const templateGrid = document.getElementById('template-grid');

    const nameInput = document.getElementById('name-input');
    const titleInput = document.getElementById('title-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const locationInput = document.getElementById('location-input');
    const websiteInput = document.getElementById('website-input');
    const emailLabelInput = document.getElementById('email-label-input');
    const phoneLabelInput = document.getElementById('phone-label-input');
    const locationLabelInput = document.getElementById('location-label-input');
    const websiteLabelInput = document.getElementById('website-label-input');
    const taglineInput = document.getElementById('tagline-input');
    const portfolioInput = document.getElementById('portfolio-input');
    const generateQrBtn = document.getElementById('generate-qr-btn');
    const qrSizeInput = document.getElementById('qr-size-input');
    const qrSizeLbl = document.getElementById('qr-size-lbl');

    const linkedinInput = document.getElementById('linkedin-input');
    const behanceInput = document.getElementById('behance-input');
    const instagramInput = document.getElementById('instagram-input');
    const tiktokInput = document.getElementById('tiktok-input');
    const youtubeInput = document.getElementById('youtube-input');
    const vimeoInput = document.getElementById('vimeo-input');

    const profileImageInput = document.getElementById('profile-image-input');
    const profileDrop = document.getElementById('profile-drop');
    const removeProfileBtn = document.getElementById('remove-profile-btn');
    const profileShapeSelect = document.getElementById('profile-shape-select');
    const profileWidthInput = document.getElementById('profile-width-input');
    const profileHeightInput = document.getElementById('profile-height-input');

    const experienceEditor = document.getElementById('experience-editor');
    const projectEditor = document.getElementById('project-editor');
    const educationEditor = document.getElementById('education-editor');
    const skillsEditor = document.getElementById('skills-editor');
    const toolsEditor = document.getElementById('tools-editor');
    const certsEditor = document.getElementById('certs-editor');

    const addExperienceBtn = document.getElementById('add-experience-btn');
    const addProjectBtn = document.getElementById('add-project-btn');
    const addEducationBtn = document.getElementById('add-education-btn');
    const addSkillBtn = document.getElementById('add-skill-btn');
    const addToolBtn = document.getElementById('add-tool-btn');
    const addCertBtn = document.getElementById('add-cert-btn');

    // Old buttons no longer exist
    // const printBtn = document.getElementById('print-btn');
    // const saveImageBtn = document.getElementById('save-image-btn');
    
    const saveDesignBtn = document.getElementById('save-project-btn');
    const loadDesignBtn = document.getElementById('load-project-btn');
    const exportPdfBtn = document.getElementById('export-pdf-btn');
    const exportPngBtn = document.getElementById('export-png-btn');
    const togglePage2Btn = document.getElementById('toggle-page2-btn');
    const page2 = document.getElementById('cv-page-2');
    const page2TemplateHtml = page2 ? page2.innerHTML : '';

    const cvName = document.getElementById('cv-name');
    const cvTitle = document.getElementById('cv-title');
    const cvTagline = document.getElementById('cv-tagline');
    const cvContact = document.getElementById('cv-contact');
    const cvExperienceList = document.getElementById('cv-experience-list');
    const cvProjectList = document.getElementById('cv-project-list');
    const cvEducationList = document.getElementById('cv-education-list');
    const cvSkillsList = document.getElementById('cv-skills-list');
    const cvToolsList = document.getElementById('cv-tools-list');
    const cvCertsList = document.getElementById('cv-certs-list');
    const cvSocialsList = document.getElementById('cv-socials-list');
    const cvQrImg = document.getElementById('cv-qr-img');
    const cvQrLabel = document.getElementById('cv-qr-label');
    const profilePhoto = document.getElementById('profile-photo');
    const profilePhotoImg = document.getElementById('profile-photo-img');

    const sectionExperience = document.getElementById('section-experience');
    const sectionProjects = document.getElementById('section-projects');
    const sectionEducation = document.getElementById('section-education');
    const sectionSkills = document.getElementById('section-skills');
    const sectionTools = document.getElementById('section-tools');
    const sectionCerts = document.getElementById('section-certs');
    const sectionSocials = document.getElementById('section-socials');
    const sectionQr = document.getElementById('section-qr');

    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomLevelEl = document.getElementById('zoom-level');
    let currentZoom = 0.58;
    const ZOOM_STEP = 0.05;
    const MAX_AUTO_ZOOM = 0.78;
    const AUTO_FIT_BREATHING_ROOM = 0.88;
    let pageGap = 40;
    const MIN_PAGE_GAP = 16;
    const MAX_PAGE_GAP = 220;
    const GRID_SIZE = 8;
    const PAGE2_SECTION_IDS = ['continued-projects', 'freelance', 'awards', 'extra-skills', 'references'];

    let activeBox = null;
    let isDraggingBox = false;
    let isResizingBox = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let boxStartX = 0;
    let boxStartY = 0;
    let boxStartWidth = 0;
    let boxStartHeight = 0;
    let isDraggingBreaker = false;
    let breakerStartY = 0;
    let breakerStartGap = 40;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let refreshQueued = false;
    let deletedBoxIds = new Set();

    const state = {
        profile: {
            name: 'John Doe',
            title: 'Senior Developer',
            email: 'john.doe@example.com',
            phone: '+1 555 123 4567',
            location: 'New York, NY',
            website: 'johndoe.dev',
            tagline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            portfolio: 'https://johndoe.dev/portfolio'
        },
        socials: {
            linkedin: 'linkedin.com/in/johndoe',
            behance: 'behance.net/johndoe',
            instagram: '@johndoe',
            tiktok: '@johndoe',
            youtube: 'youtube.com/@johndoe',
            vimeo: 'vimeo.com/johndoe'
        },
        contactLabels: {
            email: 'E-post',
            phone: 'Telefon',
            location: 'Plats',
            website: 'Webb'
        },
        socialIcons: {
            linkedin: 'linkedin',
            behance: 'behance',
            instagram: 'instagram',
            tiktok: 'tiktok',
            youtube: 'youtube',
            vimeo: 'vimeo'
        },
        experience: [
            {
                role: 'Senior Fullstack Developer',
                company: 'Tech Corp Inc.',
                period: '2021-Present',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
            },
            {
                role: 'Frontend Developer',
                company: 'Digital Studio',
                period: '2019-2021',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.'
            }
        ],
        projects: [
            {
                title: 'E-Commerce Platform',
                role: 'Lead Developer',
                link: 'https://johndoe.dev/ecommerce',
                video: 'https://youtube.com/watch?v=demo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fullstack e-commerce solution with React, Node.js, and modern UI/UX design principles.',
                thumbUrl: '',
                thumbData: ''
            },
            {
                title: 'Dashboard Analytics',
                role: 'UI/UX Developer',
                link: 'https://johndoe.dev/dashboard',
                video: '',
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Interactive dashboard with real-time data visualization.',
                thumbUrl: '',
                thumbData: ''
            }
        ],
        education: [
            {
                program: 'B.S. Computer Science',
                school: 'University of Technology',
                period: '2015-2019',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Focus on software engineering, web development, and computer systems. Magna aliqua ut enim ad minim veniam.'
            }
        ],
        skills: [
            { name: 'JavaScript', level: 95 },
            { name: 'React', level: 90 },
            { name: 'Node.js', level: 85 },
            { name: 'CSS/SCSS', level: 88 },
            { name: 'Python', level: 75 }
        ],
        tools: [
            { name: 'VS Code' },
            { name: 'Git' },
            { name: 'Figma' },
            { name: 'Docker' },
            { name: 'npm' }
        ],
        certs: [
            { name: 'React Developer Certification', issuer: 'freeCodeCamp', year: '2024', link: 'https://freecodecamp.org/cert/react' },
            { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023', link: 'https://aws.amazon.com/certification' }
        ],
        profileImage: '',
        profileShape: 'rounded',
        profileSize: { width: 120, height: 120 },
        qrDataUrl: '',
        qrSize: 80,
        backgroundImage: '',
        backgroundImageOpacity: 72,
        sectionHeadings: {
            'heading-experience': 'Experience',
            'heading-projects': 'Projects & Portfolio',
            'heading-education': 'Education',
            'heading-skills': 'Skills',
            'heading-tools': 'Tools',
            'heading-certs': 'Certificates',
            'heading-socials': 'Online',
            'heading-qr': 'Portfolio QR'
        }
    };

    const templateDefaults = {
        'template-minimal': {
            palette: 'palette-slate',
            font: 'font-sora',
            background: 'bg-clean',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#ff6b3d'
        },
        'template-dynamic': {
            palette: 'palette-studio',
            font: 'font-grotesk',
            background: 'bg-gradient',
            section: 'section-cards',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#2e7cff'
        },
        'template-story': {
            palette: 'palette-midnight',
            font: 'font-plex',
            background: 'bg-story',
            section: 'section-glass',
            layout: 'layout-one',
            skillStyle: 'skills-style-dots',
            accent: '#7c3aed'
        },
        'template-noir': {
            palette: 'palette-midnight',
            font: 'font-grotesk',
            background: 'bg-dark-noir',
            section: 'section-glass',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#00f5d4'
        },
        'template-geo': {
            palette: 'palette-forest',
            font: 'font-grotesk',
            background: 'bg-studio',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#ff6b3d'
        },
        'template-editorial': {
            palette: 'palette-mono',
            font: 'font-plex',
            background: 'bg-clean',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-dots',
            accent: '#111827'
        },
        'template-neon': {
            palette: 'palette-midnight',
            font: 'font-sora',
            background: 'bg-dark-prism',
            section: 'section-glass',
            layout: 'layout-one',
            skillStyle: 'skills-style-stars',
            accent: '#00f5d4'
        },
        'template-liquid-glass': {
            palette: 'palette-studio',
            font: 'font-sora',
            background: 'bg-story',
            section: 'section-glass',
            layout: 'layout-two',
            skillStyle: 'skills-style-dots',
            accent: '#7dd3fc'
        },
        'template-retro': {
            palette: 'palette-sand',
            font: 'font-grotesk',
            background: 'bg-story',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#ff8c42'
        },
        'template-corporate': {
            palette: 'palette-studio',
            font: 'font-plex',
            background: 'bg-studio',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#1e3a5f'
        },
        'template-agency': {
            palette: 'palette-rose',
            font: 'font-grotesk',
            background: 'bg-gradient',
            section: 'section-cards',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#ff3d00'
        },
        'template-analog': {
            palette: 'palette-sand',
            font: 'font-plex',
            background: 'bg-story',
            section: 'section-glass',
            layout: 'layout-two',
            skillStyle: 'skills-style-dots',
            accent: '#ff8c42'
        },
        'template-magazine': {
            palette: 'palette-mono',
            font: 'font-plex',
            background: 'bg-clean',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-dots',
            accent: '#111827'
        }
    };

    const paletteColors = {
        'palette-slate':    { primary: '#ff6b3d', secondary: '#2e7cff', bg: '#ffffff',  surface: '#f4f5fb', text: '#0f1116', muted: '#4b5565' },
        'palette-sand':     { primary: '#ff8c42', secondary: '#ffb562', bg: '#fffaf4',  surface: '#f9f1e7', text: '#3d2b1f', muted: '#6b5a49' },
        'palette-studio':   { primary: '#3b82f6', secondary: '#22d3ee', bg: '#f8fbff',  surface: '#eef4ff', text: '#1e3a5f', muted: '#4b6980' },
        'palette-midnight': { primary: '#00f5d4', secondary: '#7c3aed', bg: '#f6f6ff',  surface: '#ececff', text: '#1e1b4b', muted: '#6b7280' },
        'palette-ember':    { primary: '#ff3d00', secondary: '#ff8a00', bg: '#fff8f5',  surface: '#fff0eb', text: '#1a0a00', muted: '#7a4030' },
        'palette-forest':   { primary: '#22c55e', secondary: '#0ea5e9', bg: '#f0fdf4',  surface: '#dcfce7', text: '#14532d', muted: '#4b7c5c' },
        'palette-rose':     { primary: '#f43f5e', secondary: '#ec4899', bg: '#fff1f2',  surface: '#ffe4e6', text: '#4c0519', muted: '#9f4060' },
        'palette-mono':     { primary: '#111827', secondary: '#374151', bg: '#f9fafb',  surface: '#f3f4f6', text: '#111827', muted: '#6b7280' }
    };

    function escapeHtml(value) {
        return String(value || '').replace(/[&<>"']/g, (char) => {
            const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
            return map[char] || char;
        });
    }

    function normalizeUrl(value) {
        if (!value) return '';
        if (value.startsWith('http://') || value.startsWith('https://')) return value;
        return `https://${value}`;
    }

    function normalizeSocialUrl(platform, value) {
        if (!value) return '';
        if (value.startsWith('http://') || value.startsWith('https://')) return value;
        if (value.includes('.') && !value.startsWith('@')) {
            return normalizeUrl(value);
        }
        const trimmed = value.replace(/^@/, '');
        const map = {
            linkedin: `https://www.linkedin.com/in/${trimmed}`,
            behance: `https://www.behance.net/${trimmed}`,
            instagram: `https://www.instagram.com/${trimmed}`,
            tiktok: `https://www.tiktok.com/@${trimmed}`,
            youtube: `https://www.youtube.com/${trimmed}`,
            vimeo: `https://vimeo.com/${trimmed}`
        };
        return map[platform] || normalizeUrl(trimmed);
    }

    function initials(value) {
        return value
            .split(/\s+/)
            .filter(Boolean)
            .map((part) => part[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }

    function setInputValue(input, value) {
        if (input) input.value = value || '';
    }

    function getEditableText(element) {
        if (!element) return '';
        const skipSelector = '.box-resize-handle, .box-delete-btn, .box-drag-handle';
        const blockTags = new Set(['DIV', 'P', 'LI', 'SECTION', 'ARTICLE']);

        function readNode(node) {
            if (node.nodeType === Node.TEXT_NODE) return node.textContent || '';
            if (node.nodeType !== Node.ELEMENT_NODE) return '';
            if (node.matches(skipSelector)) return '';
            if (node.tagName === 'BR') return '\n';

            const text = Array.from(node.childNodes).map(readNode).join('');
            return blockTags.has(node.tagName) && node !== element ? `${text}\n` : text;
        }

        return readNode(element)
            .replace(/\u00a0/g, ' ')
            .replace(/\n{3,}/g, '\n\n')
            .trim();
    }

    function updateContact() {
        const items = [];
        const label = (field, fallback) => escapeHtml(state.contactLabels?.[field] || fallback);
        if (state.profile.email) {
            items.push(`<a class="contact-item" href="mailto:${escapeHtml(state.profile.email)}"><span class="editable" contenteditable="true" data-section="contactLabels" data-field="email">${label('email', 'E-post')}</span><span class="editable" contenteditable="true" data-section="profile" data-field="email">${escapeHtml(state.profile.email)}</span></a>`);
        }
        if (state.profile.phone) {
            items.push(`<div class="contact-item"><span class="editable" contenteditable="true" data-section="contactLabels" data-field="phone">${label('phone', 'Telefon')}</span><span class="editable" contenteditable="true" data-section="profile" data-field="phone">${escapeHtml(state.profile.phone)}</span></div>`);
        }
        if (state.profile.location) {
            items.push(`<div class="contact-item"><span class="editable" contenteditable="true" data-section="contactLabels" data-field="location">${label('location', 'Plats')}</span><span class="editable" contenteditable="true" data-section="profile" data-field="location">${escapeHtml(state.profile.location)}</span></div>`);
        }
        if (state.profile.website) {
            const url = normalizeUrl(state.profile.website);
            items.push(`<a class="contact-item" href="${escapeHtml(url)}" target="_blank" rel="noopener"><span class="editable" contenteditable="true" data-section="contactLabels" data-field="website">${label('website', 'Webb')}</span><span class="editable" contenteditable="true" data-section="profile" data-field="website">${escapeHtml(state.profile.website)}</span></a>`);
        }
        cvContact.innerHTML = items.join('');
        scheduleBoxRefresh();
    }

    function updateProfilePreview() {
        cvName.textContent = state.profile.name || 'Ditt namn';
        cvTitle.textContent = state.profile.title || 'Titel';
        cvTagline.textContent = state.profile.tagline || '';
        updateContact();

        // Update profile dimensions
        if (profilePhoto) {
            profilePhoto.style.setProperty('--profile-w', `${state.profileSize.width}px`);
            profilePhoto.style.setProperty('--profile-h', `${state.profileSize.height}px`);
        }

        // Update profile shape
        profilePhoto.classList.remove('square', 'circle', 'rect', 'rounded');
        if (state.profileShape) {
            profilePhoto.classList.add(state.profileShape);
        }

        if (state.profileImage) {
            profilePhotoImg.src = state.profileImage;
            profilePhoto.classList.add('has-image');
        } else {
            profilePhotoImg.removeAttribute('src');
            profilePhoto.classList.remove('has-image');
        }
        scheduleBoxRefresh();
    }

    function updateSectionVisibility(section, list) {
        if (!section) return;
        section.classList.toggle('empty', !list || list.length === 0);
    }

    function ensureFreeLayers() {
        cvPages.querySelectorAll('.cv').forEach((page) => {
            if (page.querySelector(':scope > .cv-free-layer')) return;
            const layer = document.createElement('div');
            layer.className = 'cv-free-layer';
            page.appendChild(layer);
        });
    }

    function ensurePageBreaker() {
        if (!cvPages.querySelector(':scope > .page-breaker-line')) {
            const breaker = document.createElement('div');
            breaker.className = 'page-breaker-line no-print';
            breaker.setAttribute('role', 'separator');
            breaker.setAttribute('aria-label', 'Flyttbar sidbrytare');
            breaker.innerHTML = '<span></span>';
            cvPages.appendChild(breaker);
        }
        updatePageBreaker();
    }

    function updatePageBreaker() {
        cvPages.style.setProperty('--page-gap', `${pageGap}px`);
        const breaker = cvPages.querySelector(':scope > .page-breaker-line');
        if (!breaker || !cv || !page2) return;
        const page2Visible = !page2.classList.contains('is-hidden');
        cvPages.classList.toggle('has-page-2', page2Visible);
        breaker.classList.toggle('is-hidden', !page2Visible);
        if (!page2Visible) return;
        breaker.style.top = `${cv.offsetTop + cv.offsetHeight + (pageGap / 2)}px`;
    }

    function scheduleBoxRefresh() {
        if (refreshQueued) return;
        refreshQueued = true;
        requestAnimationFrame(() => {
            refreshQueued = false;
            ensureFreeLayers();
            refreshDraggableBoxes();
            updatePageBreaker();
        });
    }

    function computeBoxId(box) {
        if (box.classList.contains('cv-bg-shape')) return null;
        // Section h3 elements: use parent section id
        if (box.tagName === 'H3') {
            const section = box.closest('.cv-section');
            if (section && section.id) return `h3-${section.id}`;
            // page-2 headings without id: use index among all cv-sections
            const allSections = Array.from(cvPages.querySelectorAll('.cv-section'));
            const idx = allSections.indexOf(section);
            return `h3-sidx-${idx}`;
        }
        // Elements that carry data-section + data-index on a child
        const dataChild = box.querySelector('[data-section][data-index]');
        if (dataChild) return `${dataChild.dataset.section}-${dataChild.dataset.index}`;
        // Social link has data attrs on itself
        if (box.dataset.section && box.dataset.field) return `${box.dataset.section}-${box.dataset.field}`;
        // Unique named elements
        if (box.id) return box.id;
        if (box.classList.contains('profile-photo')) return 'profile-photo';
        if (box.classList.contains('title-pill')) return 'title-pill';
        if (box.classList.contains('qr-card')) return 'qr-card';
        if (box.classList.contains('cv-header-secondary')) return 'page2-header';
        // editable-block in page2: use page section index
        const parentSection = box.closest('.cv-section');
        if (parentSection) {
            const allSections = Array.from(cvPages.querySelectorAll('.cv-section'));
            const sIdx = allSections.indexOf(parentSection);
            return `block-sidx-${sIdx}`;
        }
        return null;
    }

    function ensurePage2SectionIds() {
        if (!page2) return;
        page2.querySelectorAll('.cv-section').forEach((section, index) => {
            if (!section.dataset.page2SectionId) {
                section.dataset.page2SectionId = PAGE2_SECTION_IDS[index] || `section-${index}`;
            }
        });
    }

    function resetPage2Template() {
        if (!page2 || !page2TemplateHtml) return;
        page2.innerHTML = page2TemplateHtml;
        ensurePage2SectionIds();
    }

    function rememberDeletedBox(box) {
        if (box?.dataset.boxId) deletedBoxIds.add(box.dataset.boxId);
    }

    function rememberDeletedPage2Section(section) {
        if (!section || !page2?.contains(section)) return;
        const sectionIndex = Array.from(cvPages.querySelectorAll('.cv-section')).indexOf(section);
        if (sectionIndex < 0) return;
        deletedBoxIds.add(`h3-sidx-${sectionIndex}`);
        deletedBoxIds.add(`block-sidx-${sectionIndex}`);
    }

    function refreshDraggableBoxes() {
        ensurePage2SectionIds();
        cvPages.querySelectorAll('.cv-bg-shape.draggable-box').forEach((shape) => {
            shape.classList.remove('draggable-box', 'active');
            shape.removeAttribute('data-box-id');
            shape.querySelectorAll(':scope > .box-resize-handle, :scope > .box-delete-btn, :scope > .box-drag-handle').forEach((control) => control.remove());
        });
        const selectors = [
            '.cv-section h3',
            '.entry',
            '.project-card',
            '.skill-item',
            '.tool-chip',
            '.social-link',
            '.qr-card',
            '.contact-item',
            '.editable-block',
            '.cv-page-2 .cv-header-secondary',
            '.profile-photo',
            '.title-pill'
        ];
        const boxes = cvPages.querySelectorAll(selectors.join(','));
        boxes.forEach((box) => {
            box.classList.add('draggable-box');
            if (!box.style.getPropertyValue('--box-x')) box.style.setProperty('--box-x', '0px');
            if (!box.style.getPropertyValue('--box-y')) box.style.setProperty('--box-y', '0px');
            if (!box.style.getPropertyValue('--box-scale')) box.style.setProperty('--box-scale', '1');
            if (!box.dataset.boxId) {
                const id = computeBoxId(box);
                if (id) box.dataset.boxId = id;
            }
            if (box.dataset.boxId && deletedBoxIds.has(box.dataset.boxId)) {
                box.remove();
                return;
            }
            if (!box.querySelector(':scope > .box-resize-handle')) {
                const handle = document.createElement('div');
                handle.className = 'box-resize-handle';
                box.appendChild(handle);
            }
            if (!box.querySelector(':scope > .box-delete-btn')) {
                const del = document.createElement('button');
                del.className = 'box-delete-btn';
                del.type = 'button';
                del.title = 'Radera box';
                del.setAttribute('aria-label', 'Radera box');
                del.setAttribute('contenteditable', 'false');
                del.textContent = '×';
                box.appendChild(del);
            }
            // Add a drag grip for any box whose root element is itself contenteditable
            // (e.g. social-link, editable-block, title-pill, h3)
            // – without a grip there is no non-editable area to start a drag from.
            const isSelfEditable = box.getAttribute('contenteditable') === 'true' || box.tagName === 'H3';
            if (isSelfEditable && !box.querySelector(':scope > .box-drag-handle')) {
                const grip = document.createElement('div');
                grip.className = 'box-drag-handle';
                grip.setAttribute('contenteditable', 'false');
                grip.setAttribute('aria-hidden', 'true');
                box.insertBefore(grip, box.firstChild);
            }
        });

        const freeIds = new Set(Array.from(cvPages.querySelectorAll('.cv-free-layer > .draggable-box[data-box-id]'))
            .map((box) => box.dataset.boxId));
        if (freeIds.size) {
            cvPages.querySelectorAll('.draggable-box[data-box-id]').forEach((box) => {
                if (!freeIds.has(box.dataset.boxId) || box.closest('.cv-free-layer')) return;
                box.remove();
            });
        }
    }

    function renderExperience() {
        cvExperienceList.innerHTML = state.experience
            .map((item, index) => {
                return `
                <div class="entry">
                    <div class="entry-header">
                        <div>
                            <div class="entry-title editable" contenteditable="true" data-section="experience" data-index="${index}" data-field="role">${escapeHtml(item.role || '')}</div>
                            <div class="entry-meta editable" contenteditable="true" data-section="experience" data-index="${index}" data-field="company">${escapeHtml(item.company || '')}</div>
                        </div>
                        <div class="entry-meta editable" contenteditable="true" data-section="experience" data-index="${index}" data-field="period">${escapeHtml(item.period || '')}</div>
                    </div>
                    <div class="entry-description editable" contenteditable="true" data-section="experience" data-index="${index}" data-field="description">${escapeHtml(item.description || '')}</div>
                </div>
            `;
            })
            .join('');
        updateSectionVisibility(sectionExperience, state.experience);
        scheduleBoxRefresh();
    }

    function renderEducation() {
        cvEducationList.innerHTML = state.education
            .map((item, index) => {
                return `
                <div class="entry">
                    <div class="entry-header">
                        <div>
                            <div class="entry-title editable" contenteditable="true" data-section="education" data-index="${index}" data-field="program">${escapeHtml(item.program || '')}</div>
                            <div class="entry-meta editable" contenteditable="true" data-section="education" data-index="${index}" data-field="school">${escapeHtml(item.school || '')}</div>
                        </div>
                        <div class="entry-meta editable" contenteditable="true" data-section="education" data-index="${index}" data-field="period">${escapeHtml(item.period || '')}</div>
                    </div>
                    <div class="entry-description editable" contenteditable="true" data-section="education" data-index="${index}" data-field="description">${escapeHtml(item.description || '')}</div>
                </div>
            `;
            })
            .join('');
        updateSectionVisibility(sectionEducation, state.education);
        scheduleBoxRefresh();
    }

    function renderProjects() {
        cvProjectList.innerHTML = state.projects
            .map((item, index) => {
                const thumb = item.thumbData || item.thumbUrl;
                const link = item.link ? normalizeUrl(item.link) : '';
                const video = item.video ? normalizeUrl(item.video) : '';
                const linkHtml = `<a class="project-link editable ${item.link ? '' : 'is-placeholder'}" contenteditable="true" data-placeholder="Projektlänk" data-section="projects" data-index="${index}" data-field="link" href="${escapeHtml(link || '#')}" target="_blank" rel="noopener">${escapeHtml(item.link || '')}</a>`;
                const videoHtml = `<a class="project-link editable ${item.video ? '' : 'is-placeholder'}" contenteditable="true" data-placeholder="Video / Reel" data-section="projects" data-index="${index}" data-field="video" href="${escapeHtml(video || '#')}" target="_blank" rel="noopener">${escapeHtml(item.video || '')}</a>`;
                return `
                <div class="project-card">
                    <div class="project-thumb">${thumb ? `<img src="${escapeHtml(thumb)}" alt="">` : 'Thumbnail'}</div>
                    <div>
                        <div class="project-title editable" contenteditable="true" data-section="projects" data-index="${index}" data-field="title">${escapeHtml(item.title || '')}</div>
                        <div class="entry-meta editable" contenteditable="true" data-section="projects" data-index="${index}" data-field="role">${escapeHtml(item.role || '')}</div>
                        <div class="entry-description editable" contenteditable="true" data-section="projects" data-index="${index}" data-field="description">${escapeHtml(item.description || '')}</div>
                        ${linkHtml}
                        ${videoHtml}
                    </div>
                </div>
            `;
            })
            .join('');
        updateSectionVisibility(sectionProjects, state.projects);
        scheduleBoxRefresh();
    }

    function renderSkills() {
        cvSkillsList.innerHTML = state.skills
            .map((item, index) => {
                const level = Math.max(0, Math.min(100, Number(item.level) || 0));
                const dotCount = Math.round(level / 20);
                const dots = Array.from({ length: 5 }, (_, idx) => {
                    return `<span class="meter-dot${idx < dotCount ? ' active' : ''}"></span>`;
                }).join('');
                const stars = Array.from({ length: 5 }, (_, idx) => {
                    return `<span class="meter-star${idx < dotCount ? ' active' : ''}"></span>`;
                }).join('');
                return `
                <div class="skill-item" style="--level: ${level}%">
                    <div class="skill-head">
                        <div class="skill-name editable" contenteditable="true" data-section="skills" data-index="${index}" data-field="name">${escapeHtml(item.name || '')}</div>
                        <span class="skill-level editable" contenteditable="true" data-section="skills" data-index="${index}" data-field="level">${level}</span>
                    </div>
                    <div class="meter-bar"><span></span></div>
                    <div class="meter-dots">${dots}</div>
                    <div class="meter-stars">${stars}</div>
                </div>
            `;
            })
            .join('');
        
        // Update all skill meters after render to ensure visual sync
        document.querySelectorAll('#cv-skills-list .skill-item').forEach((skillItem, index) => {
            updateSkillMeters(skillItem, Math.max(0, Math.min(100, Number(state.skills[index]?.level) || 0)));
        });
        
        updateSectionVisibility(sectionSkills, state.skills);
        scheduleBoxRefresh();
    }

    function renderTools() {
        cvToolsList.innerHTML = state.tools
            .map((item, index) => {
                return `
                <div class="tool-chip">
                    <div class="tool-icon">${escapeHtml(initials(item.name || ''))}</div>
                    <span class="editable" contenteditable="true" data-section="tools" data-index="${index}" data-field="name">${escapeHtml(item.name || '')}</span>
                </div>
            `;
            })
            .join('');
        updateSectionVisibility(sectionTools, state.tools);
        scheduleBoxRefresh();
    }

    function renderCerts() {
        cvCertsList.innerHTML = state.certs
            .map((item, index) => {
                const link = item.link ? normalizeUrl(item.link) : '';
                const linkHtml = `<a class="project-link editable ${item.link ? '' : 'is-placeholder'}" contenteditable="true" data-placeholder="Verifiera" data-section="certs" data-index="${index}" data-field="link" href="${escapeHtml(link || '#')}" target="_blank" rel="noopener">${escapeHtml(item.link || '')}</a>`;
                return `
                <div class="entry">
                    <div class="entry-header">
                        <div>
                            <div class="entry-title editable" contenteditable="true" data-section="certs" data-index="${index}" data-field="name">${escapeHtml(item.name || '')}</div>
                            <div class="entry-meta editable" contenteditable="true" data-section="certs" data-index="${index}" data-field="issuer">${escapeHtml(item.issuer || '')}</div>
                        </div>
                        <div class="entry-meta editable" contenteditable="true" data-section="certs" data-index="${index}" data-field="year">${escapeHtml(item.year || '')}</div>
                    </div>
                    ${linkHtml}
                </div>
            `;
            })
            .join('');
        updateSectionVisibility(sectionCerts, state.certs);
        scheduleBoxRefresh();
    }

    function renderSocials() {
        const entries = [
            { key: 'linkedin', label: 'Rad 1' },
            { key: 'behance', label: 'Rad 2' },
            { key: 'instagram', label: 'Rad 3' },
            { key: 'tiktok', label: 'Rad 4' },
            { key: 'youtube', label: 'Rad 5' },
            { key: 'vimeo', label: 'Rad 6' }
        ];
        const html = entries
            .filter((entry) => state.socials[entry.key])
            .map((entry) => {
                const raw = state.socials[entry.key];
                const iconKey = getSocialIconKey(entry.key);
                const url = normalizeSocialUrl(iconKey, raw);
                return `<a class="social-link editable" contenteditable="true" data-section="socials" data-field="${entry.key}" data-icon-key="${escapeHtml(iconKey)}" href="${escapeHtml(url)}" target="_blank" rel="noopener"><span class="social-icon" contenteditable="false" aria-hidden="true">${socialSvgIcon(iconKey)}</span><span>${escapeHtml(raw)}</span></a>`;
            })
            .join('');
        cvSocialsList.innerHTML = html;
        updateSectionVisibility(sectionSocials, entries.filter((entry) => state.socials[entry.key]));
        scheduleBoxRefresh();
    }

    function getSocialIconKey(rowKey) {
        return state.socialIcons?.[rowKey] || rowKey || 'web';
    }

    function socialSvgIcon(platform) {
        const icons = {
            linkedin: '<svg viewBox="0 0 24 24" focusable="false"><path d="M6.5 8.6h3.1V18H6.5V8.6Zm1.6-4.4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM11.2 8.6h3v1.3c.4-.7 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8V18h-3.1v-4.4c0-1.1 0-2.4-1.5-2.4s-1.8 1.2-1.8 2.4V18h-3.1V8.6Z"/></svg>',
            behance: '<svg viewBox="0 0 24 24" focusable="false"><path d="M4 6h5.5c2 0 3.3 1 3.3 2.6 0 1-.5 1.8-1.4 2.2 1.3.4 2 1.3 2 2.7 0 2-1.6 3.2-4.1 3.2H4V6Zm3 4.2h2c.8 0 1.2-.4 1.2-1s-.4-1-1.3-1H7v2Zm0 4.2h2.2c1 0 1.5-.4 1.5-1.2s-.5-1.2-1.6-1.2H7v2.4ZM15 7h5v1.5h-5V7Zm2.7 2.3c2.4 0 3.9 1.6 3.9 4.1v.7h-5.7c.1 1 .8 1.5 1.8 1.5.8 0 1.3-.3 1.6-.8h2.1c-.5 1.4-1.8 2.3-3.8 2.3-2.4 0-4-1.6-4-3.9s1.7-3.9 4.1-3.9Zm1.6 3.4c-.1-.9-.7-1.4-1.6-1.4s-1.5.5-1.7 1.4h3.3Z"/></svg>',
            instagram: '<svg viewBox="0 0 24 24" focusable="false"><path d="M8 4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4Zm0 2.2A1.8 1.8 0 0 0 6.2 8v8A1.8 1.8 0 0 0 8 17.8h8a1.8 1.8 0 0 0 1.8-1.8V8A1.8 1.8 0 0 0 16 6.2H8Zm4 2.8a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.4-1.1a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z"/></svg>',
            tiktok: '<svg viewBox="0 0 24 24" focusable="false"><path d="M14.6 4c.4 2.3 1.7 3.7 3.9 3.9v3a6.8 6.8 0 0 1-3.8-1.2v4.8c0 3-2.1 5.1-5.1 5.1A4.9 4.9 0 0 1 4.5 15c0-3.1 2.7-5.4 5.9-4.8v3.1c-1.5-.5-2.8.4-2.8 1.7 0 1.1.9 1.8 1.9 1.8 1.2 0 2-.7 2-2.2V4h3.1Z"/></svg>',
            youtube: '<svg viewBox="0 0 24 24" focusable="false"><path d="M20.6 7.4c.3 1.2.3 4.6.3 4.6s0 3.4-.3 4.6a2.4 2.4 0 0 1-1.7 1.7c-1.2.3-6.9.3-6.9.3s-5.7 0-6.9-.3a2.4 2.4 0 0 1-1.7-1.7C3.1 15.4 3.1 12 3.1 12s0-3.4.3-4.6a2.4 2.4 0 0 1 1.7-1.7c1.2-.3 6.9-.3 6.9-.3s5.7 0 6.9.3a2.4 2.4 0 0 1 1.7 1.7ZM10.3 14.7l4.7-2.7-4.7-2.7v5.4Z"/></svg>',
            vimeo: '<svg viewBox="0 0 24 24" focusable="false"><path d="M21 8.2c-.1 2.6-1.9 6.1-5.4 10.3-1.4 1.7-2.7 2.6-3.8 2.6-1.3 0-2.4-1.2-3.3-3.6l-1.8-6.2c-.7-2.4-1.4-3.6-2.1-3.6-.2 0-.7.3-1.6.9L2 7.3l3.1-2.8c1.4-1.2 2.5-1.8 3.2-1.9 1.7-.2 2.7 1 3.1 3.5.4 2.7.7 4.4.9 5 .5 2.1 1.1 3.2 1.7 3.2.5 0 1.2-.8 2.1-2.3.9-1.5 1.4-2.7 1.5-3.5.1-1.3-.4-2-1.5-2-.5 0-1 .1-1.6.4 1.1-3.5 3.1-5.2 6.1-5.1 2.2.1 3.2 1.5 3.1 4.4Z"/></svg>',
            web: '<svg viewBox="0 0 24 24" focusable="false"><path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm5.6 7h-3.1a12 12 0 0 0-.8-4 6.1 6.1 0 0 1 3.9 4ZM12 6.1c.5.8 1.1 2.4 1.2 4.9h-2.4c.1-2.5.7-4.1 1.2-4.9ZM6.4 13h3.1c.1 1.5.4 2.9.8 4a6.1 6.1 0 0 1-3.9-4Zm3.1-2H6.4a6.1 6.1 0 0 1 3.9-4 12 12 0 0 0-.8 4Zm2.5 6.9c-.5-.8-1.1-2.4-1.2-4.9h2.4c-.1 2.5-.7 4.1-1.2 4.9Zm1.7-.9c.4-1.1.7-2.5.8-4h3.1a6.1 6.1 0 0 1-3.9 4Z"/></svg>'
        };
        return icons[platform] || icons.web;
    }

    function updateSkillMeters(skillItem, level) {
        if (!skillItem) return;
        skillItem.style.setProperty('--level', `${level}%`);
        const dotCount = Math.round(level / 20);
        skillItem.querySelectorAll('.meter-dot').forEach((dot, idx) => {
            dot.classList.toggle('active', idx < dotCount);
        });
        skillItem.querySelectorAll('.meter-star').forEach((star, idx) => {
            star.classList.toggle('active', idx < dotCount);
        });
    }

    function setActiveBox(box) {
        document.querySelectorAll('.draggable-box.active').forEach((el) => el.classList.remove('active'));
        if (box) box.classList.add('active');
        activeBox = box;
    }

    function rerenderSection(section) {
        const renders = {
            experience: renderExperience,
            projects: renderProjects,
            education: renderEducation,
            skills: renderSkills,
            tools: renderTools,
            certs: renderCerts,
            socials: renderSocials
        };
        if (renders[section]) renders[section]();
    }

    function removeStateBackedBox(box) {
        const dataEl = box.matches('[data-section]') ? box : box.querySelector('[data-section]');
        if (!dataEl) return false;
        const section = dataEl.dataset.section;
        const index = dataEl.dataset.index !== undefined ? Number(dataEl.dataset.index) : null;
        const field = dataEl.dataset.field;
        const listMap = {
            experience: state.experience,
            projects: state.projects,
            education: state.education,
            skills: state.skills,
            tools: state.tools,
            certs: state.certs
        };

        if (listMap[section] && index !== null && !Number.isNaN(index)) {
            listMap[section].splice(index, 1);
            renderEditors();
            rerenderSection(section);
            return true;
        }

        if (section === 'socials' && field) {
            state.socials[field] = '';
            const inputMap = {
                linkedin: linkedinInput,
                behance: behanceInput,
                instagram: instagramInput,
                tiktok: tiktokInput,
                youtube: youtubeInput,
                vimeo: vimeoInput
            };
            if (inputMap[field]) inputMap[field].value = '';
            renderSocials();
            return true;
        }

        if (section === 'contactLabels' && field) {
            state.contactLabels[field] = '';
            const inputMap = {
                email: emailLabelInput,
                phone: phoneLabelInput,
                location: locationLabelInput,
                website: websiteLabelInput
            };
            if (inputMap[field]) inputMap[field].value = '';
            updateContact();
            return true;
        }

        if (section === 'profile' && field) {
            state.profile[field] = '';
            const inputMap = {
                name: nameInput,
                title: titleInput,
                tagline: taglineInput,
                email: emailInput,
                phone: phoneInput,
                location: locationInput,
                website: websiteInput,
                portfolio: portfolioInput
            };
            if (inputMap[field]) inputMap[field].value = '';
            if (['email', 'phone', 'location', 'website'].includes(field)) updateContact();
            else if (field === 'portfolio') {
                state.qrDataUrl = '';
                renderQr();
            } else updateProfilePreview();
            return true;
        }

        return false;
    }

    function deleteDraggableBox(box) {
        if (!box) return;
        const wasMovedBox = box.dataset.freeBox === 'true' || !!box.closest('.cv-free-layer');
        const wasStateBacked = removeStateBackedBox(box);
        if (wasStateBacked) {
            if (wasMovedBox && box.isConnected) box.remove();
            setActiveBox(null);
            scheduleBoxRefresh();
            return;
        }

        if (box.classList.contains('profile-photo')) {
            state.profileImage = '';
            updateProfilePreview();
            if (wasMovedBox && box.isConnected) box.remove();
            setActiveBox(null);
            return;
        }

        if (box.classList.contains('qr-card')) {
            state.profile.portfolio = '';
            state.qrDataUrl = '';
            if (portfolioInput) portfolioInput.value = '';
            renderQr();
            if (wasMovedBox && box.isConnected) box.remove();
            setActiveBox(null);
            return;
        }

        if (box.classList.contains('cv-header-secondary')) {
            rememberDeletedBox(box);
            box.remove();
            setActiveBox(null);
            scheduleBoxRefresh();
            return;
        }

        const section = box.closest('.cv-section');
        if (box.tagName === 'H3' && section) {
            rememberDeletedPage2Section(section);
            section.remove();
        } else if (box.classList.contains('editable-block') && section) {
            rememberDeletedPage2Section(section);
            section.remove();
        } else {
            rememberDeletedBox(box);
            box.remove();
        }
        setActiveBox(null);
        scheduleBoxRefresh();
    }

    function moveBoxToPage(box, targetPage, clientX, clientY) {
        if (!box || !targetPage || targetPage.classList.contains('is-hidden')) return;
        const sourcePage = box.closest('.cv');
        if (sourcePage === targetPage) return;
        const layer = targetPage.querySelector(':scope > .cv-free-layer');
        if (!layer) return;
        const pageRect = targetPage.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();
        const left = snapValue((clientX - pageRect.left - (boxRect.width / 2)) / currentZoom);
        const top = snapValue((clientY - pageRect.top - 18) / currentZoom);
        box.dataset.freeBox = 'true';
        box.style.setProperty('--box-left', `${Math.max(0, left)}px`);
        box.style.setProperty('--box-top', `${Math.max(0, top)}px`);
        box.style.setProperty('--box-x', '0px');
        box.style.setProperty('--box-y', '0px');
        layer.appendChild(box);
        setActiveBox(box);
    }

    function snapValue(value) {
        return Math.round(value / GRID_SIZE) * GRID_SIZE;
    }

    function syncEditorField(editor, index, field, value) {
        if (!editor) return;
        const input = editor.querySelector(`.list-card[data-index="${index}"] [data-field="${field}"]`);
        if (input) input.value = value;
    }

    function syncSkillLevelInput(index, value) {
        const input = skillsEditor.querySelector(`.list-card[data-index="${index}"] [data-field="level"]`);
        if (input) input.value = value;
    }

    function handleEditableInput(target) {
        const section = target.dataset.section;
        const field = target.dataset.field;
        const index = target.dataset.index ? Number(target.dataset.index) : null;
        const rawValue = getEditableText(target);

        if (section === 'profile') {
            state.profile[field] = rawValue;
            if (field === 'name') nameInput.value = rawValue;
            if (field === 'title') titleInput.value = rawValue;
            if (field === 'tagline') taglineInput.value = rawValue;
            if (field === 'email') emailInput.value = rawValue;
            if (field === 'phone') phoneInput.value = rawValue;
            if (field === 'location') locationInput.value = rawValue;
            if (field === 'website') websiteInput.value = rawValue;
            if (field === 'portfolio') portfolioInput.value = rawValue;

            if (field === 'email') {
                const anchor = target.closest('a');
                if (anchor) anchor.href = `mailto:${rawValue}`;
            }
            if (field === 'website') {
                const anchor = target.closest('a');
                if (anchor) anchor.href = normalizeUrl(rawValue);
            }
            if (field === 'portfolio') {
                cvQrLabel.textContent = rawValue;
            }
            return;
        }

        if (section === 'experience' && index !== null) {
            state.experience[index][field] = rawValue;
            syncEditorField(experienceEditor, index, field, rawValue);
            return;
        }

        if (section === 'education' && index !== null) {
            state.education[index][field] = rawValue;
            syncEditorField(educationEditor, index, field, rawValue);
            return;
        }

        if (section === 'projects' && index !== null) {
            state.projects[index][field] = rawValue;
            syncEditorField(projectEditor, index, field, rawValue);
            if (field === 'link' || field === 'video') {
                const anchor = target.closest('a');
                if (anchor) {
                    anchor.href = rawValue ? normalizeUrl(rawValue) : '#';
                    anchor.classList.toggle('is-placeholder', !rawValue);
                }
            }
            return;
        }

        if (section === 'skills' && index !== null) {
            if (field === 'level') {
                const parsed = Number(rawValue.replace(/[^0-9]/g, ''));
                const level = Math.max(0, Math.min(100, isNaN(parsed) ? 0 : parsed));
                state.skills[index].level = level;
                target.textContent = level;
                const skillItem = target.closest('.skill-item');
                updateSkillMeters(skillItem, level);
                syncSkillLevelInput(index, level);
            } else {
                state.skills[index][field] = rawValue;
                syncEditorField(skillsEditor, index, field, rawValue);
            }
            return;
        }

        if (section === 'tools' && index !== null) {
            state.tools[index][field] = rawValue;
            syncEditorField(toolsEditor, index, field, rawValue);
            const icon = target.closest('.tool-chip')?.querySelector('.tool-icon');
            if (icon) icon.textContent = initials(rawValue);
            return;
        }

        if (section === 'certs' && index !== null) {
            state.certs[index][field] = rawValue;
            syncEditorField(certsEditor, index, field, rawValue);
            if (field === 'link') {
                const anchor = target.closest('a');
                if (anchor) {
                    anchor.href = rawValue ? normalizeUrl(rawValue) : '#';
                    anchor.classList.toggle('is-placeholder', !rawValue);
                }
            }
            return;
        }

        if (section === 'socials') {
            state.socials[field] = rawValue;
            const inputMap = {
                linkedin: linkedinInput,
                behance: behanceInput,
                instagram: instagramInput,
                tiktok: tiktokInput,
                youtube: youtubeInput,
                vimeo: vimeoInput
            };
            if (inputMap[field]) inputMap[field].value = rawValue;
            const anchor = target.closest('a');
            if (anchor) anchor.href = normalizeSocialUrl(getSocialIconKey(field), rawValue);
        }

        if (section === 'contactLabels') {
            state.contactLabels[field] = rawValue;
            const inputMap = {
                email: emailLabelInput,
                phone: phoneLabelInput,
                location: locationLabelInput,
                website: websiteLabelInput
            };
            if (inputMap[field]) inputMap[field].value = rawValue;
        }
    }

    function handleEditableBlur(target) {
        if (target.dataset.section === 'profile' && target.dataset.field === 'portfolio') {
            generateQr();
        }
    }

    function applyQrSize() {
        const size = state.qrSize || 120;
        if (cvQrImg) {
            cvQrImg.style.width = `${size}px`;
            cvQrImg.style.height = `${size}px`;
        }
        const qrSizeInput = document.getElementById('qr-size-input');
        if (qrSizeInput && qrSizeInput.value != size) qrSizeInput.value = size;
    }

    async function generateQr() {
        const url = state.profile.portfolio;
        if (!url) {
            state.qrDataUrl = '';
            renderQr();
            return;
        }
        // Fetch as SVG for infinite scalability — display size is controlled purely by CSS
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&format=svg&data=${encodeURIComponent(url)}`;
        try {
            const response = await fetch(qrUrl);
            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = () => {
                state.qrDataUrl = reader.result;
                renderQr();
            };
            reader.readAsDataURL(blob);
        } catch (err) {
            state.qrDataUrl = qrUrl;
            renderQr();
        }
    }

    function renderQr() {
        if (!state.profile.portfolio) {
            sectionQr.classList.add('empty');
            return;
        }
        sectionQr.classList.remove('empty');
        cvQrImg.src = state.qrDataUrl || '';
        cvQrLabel.textContent = state.profile.portfolio;
        applyQrSize();
    }

    function renderAll() {
        updateProfilePreview();
        renderExperience();
        renderProjects();
        renderEducation();
        renderSkills();
        renderTools();
        renderCerts();
        renderSocials();
        renderQr();
        renderSectionHeadings();
    }

    function renderSectionHeadings() {
        Object.entries(state.sectionHeadings).forEach(([id, text]) => {
            const el = document.getElementById(id);
            if (!el) return;
            // Replace only text nodes – preserve child elements (e.g. drag handles)
            Array.from(el.childNodes)
                .filter(n => n.nodeType === Node.TEXT_NODE)
                .forEach(n => el.removeChild(n));
            el.appendChild(document.createTextNode(text));
        });
    }

    function renderExperienceEditor() {
        experienceEditor.innerHTML = state.experience
            .map((item, index) => {
                return `
                <div class="list-card" data-index="${index}">
                    <div class="list-row">
                        <input type="text" data-field="role" placeholder="Roll" value="${escapeHtml(item.role || '')}">
                        <input type="text" data-field="company" placeholder="Företag" value="${escapeHtml(item.company || '')}">
                    </div>
                    <div class="list-row">
                        <input type="text" data-field="period" placeholder="Period" value="${escapeHtml(item.period || '')}">
                    </div>
                    <textarea data-field="description" placeholder="Beskrivning">${escapeHtml(item.description || '')}</textarea>
                    <button class="mini-btn remove-btn" type="button">Ta bort</button>
                </div>
            `;
            })
            .join('');
    }

    function renderEducationEditor() {
        educationEditor.innerHTML = state.education
            .map((item, index) => {
                return `
                <div class="list-card" data-index="${index}">
                    <div class="list-row">
                        <input type="text" data-field="program" placeholder="Utbildning" value="${escapeHtml(item.program || '')}">
                        <input type="text" data-field="school" placeholder="Skola" value="${escapeHtml(item.school || '')}">
                    </div>
                    <div class="list-row">
                        <input type="text" data-field="period" placeholder="Period" value="${escapeHtml(item.period || '')}">
                    </div>
                    <textarea data-field="description" placeholder="Beskrivning">${escapeHtml(item.description || '')}</textarea>
                    <button class="mini-btn remove-btn" type="button">Ta bort</button>
                </div>
            `;
            })
            .join('');
    }

    function renderProjectEditor() {
        projectEditor.innerHTML = state.projects
            .map((item, index) => {
                return `
                <div class="list-card" data-index="${index}">
                    <div class="list-row">
                        <input type="text" data-field="title" placeholder="Projekt" value="${escapeHtml(item.title || '')}">
                        <input type="text" data-field="role" placeholder="Roll" value="${escapeHtml(item.role || '')}">
                    </div>
                    <div class="list-row">
                        <input type="text" data-field="link" placeholder="Länk" value="${escapeHtml(item.link || '')}">
                        <input type="text" data-field="video" placeholder="Video / Reel" value="${escapeHtml(item.video || '')}">
                    </div>
                    <textarea data-field="description" placeholder="Beskrivning">${escapeHtml(item.description || '')}</textarea>
                    <div class="list-row">
                        <input type="text" data-field="thumbUrl" placeholder="Thumbnail URL" value="${escapeHtml(item.thumbUrl || '')}">
                        <input type="file" data-field="thumbFile" accept="image/*">
                    </div>
                    <button class="mini-btn clear-thumb" type="button">Rensa bild</button>
                    <button class="mini-btn remove-btn" type="button">Ta bort</button>
                </div>
            `;
            })
            .join('');
    }

    function renderSkillsEditor() {
        skillsEditor.innerHTML = state.skills
            .map((item, index) => {
                return `
                <div class="list-card" data-index="${index}">
                    <div class="list-row">
                        <input type="text" data-field="name" placeholder="Färdighet" value="${escapeHtml(item.name || '')}">
                        <input type="range" data-field="level" min="0" max="100" value="${Number(item.level) || 0}">
                    </div>
                    <button class="mini-btn remove-btn" type="button">Ta bort</button>
                </div>
            `;
            })
            .join('');
    }

    function renderToolsEditor() {
        toolsEditor.innerHTML = state.tools
            .map((item, index) => {
                return `
                <div class="list-card" data-index="${index}">
                    <input type="text" data-field="name" placeholder="Programvara" value="${escapeHtml(item.name || '')}">
                    <button class="mini-btn remove-btn" type="button">Ta bort</button>
                </div>
            `;
            })
            .join('');
    }

    function renderCertsEditor() {
        certsEditor.innerHTML = state.certs
            .map((item, index) => {
                return `
                <div class="list-card" data-index="${index}">
                    <div class="list-row">
                        <input type="text" data-field="name" placeholder="Certifikat" value="${escapeHtml(item.name || '')}">
                        <input type="text" data-field="issuer" placeholder="Utfärdare" value="${escapeHtml(item.issuer || '')}">
                    </div>
                    <div class="list-row">
                        <input type="text" data-field="year" placeholder="År" value="${escapeHtml(item.year || '')}">
                        <input type="text" data-field="link" placeholder="Länk" value="${escapeHtml(item.link || '')}">
                    </div>
                    <button class="mini-btn remove-btn" type="button">Ta bort</button>
                </div>
            `;
            })
            .join('');
    }

    function autoSizeTextarea(textarea) {
        if (!textarea) return;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }

    function autoSizePanelTextareas(root = document) {
        root.querySelectorAll('.panels-dock textarea').forEach(autoSizeTextarea);
    }

    function renderEditors() {
        renderExperienceEditor();
        renderProjectEditor();
        renderEducationEditor();
        renderSkillsEditor();
        renderToolsEditor();
        renderCertsEditor();
        autoSizePanelTextareas();
    }

    function bindEditorEvents() {
        experienceEditor.addEventListener('input', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            const field = event.target.dataset.field;
            if (!field) return;
            state.experience[index][field] = event.target.value;
            renderExperience();
        });

        experienceEditor.addEventListener('click', (event) => {
            if (!event.target.classList.contains('remove-btn')) return;
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            state.experience.splice(index, 1);
            renderEditors();
            renderExperience();
        });

        educationEditor.addEventListener('input', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            const field = event.target.dataset.field;
            if (!field) return;
            state.education[index][field] = event.target.value;
            renderEducation();
        });

        educationEditor.addEventListener('click', (event) => {
            if (!event.target.classList.contains('remove-btn')) return;
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            state.education.splice(index, 1);
            renderEditors();
            renderEducation();
        });

        projectEditor.addEventListener('input', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            const field = event.target.dataset.field;
            if (!field) return;
            state.projects[index][field] = event.target.value;
            renderProjects();
        });

        projectEditor.addEventListener('change', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            if (event.target.dataset.field !== 'thumbFile') return;
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                state.projects[index].thumbData = reader.result;
                renderProjects();
            };
            reader.readAsDataURL(file);
        });

        projectEditor.addEventListener('click', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            if (event.target.classList.contains('remove-btn')) {
                state.projects.splice(index, 1);
                renderEditors();
                renderProjects();
            }
            if (event.target.classList.contains('clear-thumb')) {
                state.projects[index].thumbData = '';
                state.projects[index].thumbUrl = '';
                renderEditors();
                renderProjects();
            }
        });

        skillsEditor.addEventListener('input', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            const field = event.target.dataset.field;
            if (!field) return;
            state.skills[index][field] = event.target.value;
            renderSkills();
        });

        skillsEditor.addEventListener('click', (event) => {
            if (!event.target.classList.contains('remove-btn')) return;
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            state.skills.splice(index, 1);
            renderEditors();
            renderSkills();
        });

        toolsEditor.addEventListener('input', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            const field = event.target.dataset.field;
            if (!field) return;
            state.tools[index][field] = event.target.value;
            renderTools();
        });

        toolsEditor.addEventListener('click', (event) => {
            if (!event.target.classList.contains('remove-btn')) return;
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            state.tools.splice(index, 1);
            renderEditors();
            renderTools();
        });

        certsEditor.addEventListener('input', (event) => {
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            const field = event.target.dataset.field;
            if (!field) return;
            state.certs[index][field] = event.target.value;
            renderCerts();
        });

        certsEditor.addEventListener('click', (event) => {
            if (!event.target.classList.contains('remove-btn')) return;
            const card = event.target.closest('.list-card');
            if (!card) return;
            const index = Number(card.dataset.index);
            state.certs.splice(index, 1);
            renderEditors();
            renderCerts();
        });
    }

    function updateZoom() {
        cvWrapper.style.transform = `scale(${currentZoom})`;
        zoomLevelEl.textContent = `${Math.round(currentZoom * 100)}%`;
        const statusZoomInfo = document.getElementById('status-zoom-info');
        if (statusZoomInfo) statusZoomInfo.textContent = `Zoom: ${Math.round(currentZoom * 100)}%`;
    }

    function autoFitZoom() {
        const previewArea = document.querySelector('.canvas-area') || document.querySelector('.preview-area');
        const paddingX = 96;
        const paddingY = 120;
        const assumedWidth = formatSelect.value === 'a3' ? 1122 : 794;
        const assumedHeight = formatSelect.value === 'a3' ? 1587 : 1122;
        const pageCount = page2 && !page2.classList.contains('is-hidden') ? 2 : 1;
        const totalHeight = assumedHeight * pageCount + pageGap * (pageCount - 1);
        const scaleWidth = (previewArea.clientWidth - paddingX) / assumedWidth;
        const scaleHeight = (previewArea.clientHeight - paddingY) / totalHeight;
        const fittedScale = Math.min(scaleWidth, scaleHeight) * AUTO_FIT_BREATHING_ROOM;
        currentZoom = Math.min(Math.max(fittedScale, 0.2), MAX_AUTO_ZOOM);
        updateZoom();
        updatePageBreaker();
    }

    function applyCvClass(targetClass, prefix) {
        cvPages.querySelectorAll('.cv').forEach((page) => {
            page.classList.forEach((cls) => {
                if (cls.startsWith(prefix)) page.classList.remove(cls);
            });
            page.classList.add(targetClass);
        });
    }

    function applyTemplateDefaults(templateClass) {
        const defaults = templateDefaults[templateClass] || {};
        if (layoutSelect) layoutSelect.value = defaults.layout || 'layout-two';
        if (paletteSelect) paletteSelect.value = defaults.palette || 'palette-slate';
        if (fontSelect) fontSelect.value = defaults.font || 'font-sora';
        if (backgroundSelect) backgroundSelect.value = defaults.background || 'bg-clean';
        if (sectionStyleSelect) sectionStyleSelect.value = defaults.section || 'section-cards';
        if (skillStyleSelect) skillStyleSelect.value = defaults.skillStyle || 'skills-style-bars';
        if (accentColorInput) accentColorInput.value = defaults.accent || '#ff6b3d';

        applyCvClass(defaults.layout || 'layout-two', 'layout-');
        applyPalette(defaults.palette || 'palette-slate');
        applyCvClass(defaults.font || 'font-sora', 'font-');
        applyCvClass(defaults.background || 'bg-clean', 'bg-');
        applyCvClass(defaults.section || 'section-cards', 'section-');
        applyCvClass(defaults.skillStyle || 'skills-style-bars', 'skills-style-');

        if (isLiquidGlassActive()) updateCvColors();
    }

    function resetColors() {
        clearInlineColorVars();
        if (paletteSelect) {
            paletteSelect.selectedIndex = 0;
            applyPalette(paletteSelect.value);
        }
    }

    if (resetColorsBtn) {
        resetColorsBtn.addEventListener('click', resetColors);
    }

    function clearInlineColorVars() {
        const vars = ['--cv-primary', '--cv-secondary', '--cv-bg', '--cv-surface', '--cv-text', '--cv-muted', '--cv-accent', '--cv-accent-2'];
        cvPages.querySelectorAll('.cv').forEach(page => {
            vars.forEach(v => page.style.removeProperty(v));
        });
    }

    function hasInlineColorOverrides() {
        const page = cvPages.querySelector('.cv');
        return page ? !!page.style.getPropertyValue('--cv-primary') : false;
    }

    function syncColorPickersFromPalette(paletteClass) {
        const colors = paletteColors[paletteClass];
        if (!colors) return;
        if (cvPrimaryColor) cvPrimaryColor.value = colors.primary;
        if (cvSecondaryColor) cvSecondaryColor.value = colors.secondary;
        if (cvBgColor) cvBgColor.value = colors.bg;
        if (cvSurfaceColor) cvSurfaceColor.value = colors.surface;
        if (cvTextColor) cvTextColor.value = colors.text;
        if (cvMutedColor) cvMutedColor.value = colors.muted;
        if (accentColorInput) accentColorInput.value = colors.primary;
    }

    function isLiquidGlassActive() {
        return Array.from(cvPages.querySelectorAll('.cv')).some((page) => page.classList.contains('template-liquid-glass'));
    }

    function applyPalette(paletteClass) {
        applyCvClass(paletteClass, 'palette-');
        clearInlineColorVars();
        syncColorPickersFromPalette(paletteClass);
        if (isLiquidGlassActive()) updateCvColors();
    }

    function collectPage2Content() {
        if (!page2) return null;
        ensurePage2SectionIds();
        const page2Header = page2.querySelector('.cv-header-secondary');
        const pageTitle = page2Header?.querySelector('.page-title');
        const pageSubtitle = page2Header?.querySelector('.page-subtitle');
        const sections = Array.from(page2.querySelectorAll('.cv-section')).map(section => {
            const h3 = section.querySelector('h3');
            const block = section.querySelector('.editable-block');
            return {
                id: section.dataset.page2SectionId || '',
                title: h3 ? getEditableText(h3) : '',
                content: block ? getEditableText(block) : ''
            };
        });
        return {
            headerVisible: !!page2Header,
            pageTitle: pageTitle ? getEditableText(pageTitle) : '',
            pageSubtitle: pageSubtitle ? getEditableText(pageSubtitle) : '',
            sections
        };
    }

    function restorePage2Content(content) {
        if (!page2 || !content) return;
        ensurePage2SectionIds();
        removeDeletedPage2SectionsFromBoxIds();
        if (content.headerVisible === false || deletedBoxIds.has('page2-header')) {
            page2.querySelector('.cv-header-secondary')?.remove();
        }
        const page2Header = page2.querySelector('.cv-header-secondary');
        const pageTitle = page2Header?.querySelector('.page-title');
        const pageSubtitle = page2Header?.querySelector('.page-subtitle');
        if (pageTitle && content.pageTitle !== undefined) pageTitle.textContent = content.pageTitle;
        if (pageSubtitle && content.pageSubtitle !== undefined) pageSubtitle.textContent = content.pageSubtitle;
        if (content.sections) {
            const hasStableIds = content.sections.some((section) => section.id);
            if (hasStableIds) {
                const savedIds = new Set(content.sections.map((section) => section.id).filter(Boolean));
                page2.querySelectorAll('.cv-section').forEach((section) => {
                    if (!savedIds.has(section.dataset.page2SectionId)) section.remove();
                });
            }
            const sections = page2.querySelectorAll('.cv-section');
            content.sections.forEach((sData, idx) => {
                const section = sData.id
                    ? page2.querySelector(`.cv-section[data-page2-section-id="${sData.id}"]`)
                    : sections[idx];
                if (!section) return;
                const h3 = section.querySelector('h3');
                const block = section.querySelector('.editable-block');
                if (h3 && sData.title !== undefined) h3.textContent = sData.title;
                if (block && sData.content !== undefined) block.textContent = sData.content;
            });
        }
    }

    function removeDeletedPage2SectionsFromBoxIds() {
        if (!page2 || !deletedBoxIds.size) return;
        Array.from(page2.querySelectorAll('.cv-section')).forEach((section) => {
            const sectionIndex = Array.from(cvPages.querySelectorAll('.cv-section')).indexOf(section);
            if (deletedBoxIds.has(`h3-sidx-${sectionIndex}`) || deletedBoxIds.has(`block-sidx-${sectionIndex}`)) {
                section.remove();
            }
        });
    }

    function collectBoxPositions() {
        const positions = {};
        cvPages.querySelectorAll('.draggable-box[data-box-id]').forEach((box) => {
            const id = box.dataset.boxId;
            if (deletedBoxIds.has(id)) return;
            const x = parseFloat(box.style.getPropertyValue('--box-x')) || 0;
            const y = parseFloat(box.style.getPropertyValue('--box-y')) || 0;
            const scale = parseFloat(box.style.getPropertyValue('--box-scale')) || 1;
            const width = parseFloat(box.style.width) || 0;
            const height = parseFloat(box.style.height) || 0;
            const bg = box.style.backgroundColor || '';
            const color = box.style.color || '';
            const border = box.style.borderColor || '';
            const borderWidth = parseFloat(box.style.borderWidth) || 0;
            const padding = parseFloat(box.style.padding) || 0;
            const radius = parseFloat(box.style.borderRadius) || 0;
            const shape = box.dataset.boxShape || '';
            const fontWeight = box.style.fontWeight || '';
            const free = box.dataset.freeBox === 'true';
            const page = box.closest('.cv')?.id || '';
            const left = parseFloat(box.style.getPropertyValue('--box-left')) || 0;
            const top = parseFloat(box.style.getPropertyValue('--box-top')) || 0;
            if (x !== 0 || y !== 0 || scale !== 1 || width || height || bg || color || border || borderWidth || padding || radius || shape || fontWeight || free) {
                positions[id] = { x, y, scale, width, height, bg, color, border, borderWidth, padding, radius, shape, fontWeight, free, page, left, top };
            }
        });
        return positions;
    }

    function restoreBoxPositions(positions) {
        if (!positions) return;
        ensureFreeLayers();
        cvPages.querySelectorAll('.draggable-box[data-box-id]').forEach((box) => {
            const pos = positions[box.dataset.boxId];
            if (!pos) return;
            if (pos.free && pos.page) {
                const targetPage = document.getElementById(pos.page);
                const layer = targetPage?.querySelector(':scope > .cv-free-layer');
                if (layer) {
                    box.dataset.freeBox = 'true';
                    box.style.setProperty('--box-left', `${pos.left || 0}px`);
                    box.style.setProperty('--box-top', `${pos.top || 0}px`);
                    layer.appendChild(box);
                }
            }
            box.style.setProperty('--box-x', `${pos.x}px`);
            box.style.setProperty('--box-y', `${pos.y}px`);
            box.style.setProperty('--box-scale', `${pos.scale ?? 1}`);
            if (pos.width) box.style.width = `${pos.width}px`;
            if (pos.height) box.style.height = `${pos.height}px`;
            if (pos.bg) box.style.backgroundColor = pos.bg;
            if (pos.color) box.style.color = pos.color;
            if (pos.border) box.style.borderColor = pos.border;
            if (pos.borderWidth !== undefined) {
                box.style.borderWidth = `${pos.borderWidth}px`;
                box.style.borderStyle = pos.borderWidth > 0 ? 'solid' : 'none';
            }
            if (pos.padding !== undefined) box.style.padding = `${pos.padding}px`;
            if (pos.radius !== undefined) box.style.borderRadius = `${pos.radius}px`;
            if (pos.fontWeight) box.style.fontWeight = pos.fontWeight;
            if (pos.shape) applyBoxShape(box, pos.shape);
            if (pos.bg || pos.color || pos.border || pos.borderWidth || pos.padding || pos.radius || pos.shape || pos.fontWeight) {
                box.classList.add('has-box-style');
            }
        });
    }

    function loadLegacyDesign(design) {
        const safeHex = (val, def) => (val && /^#[0-9a-f]{6}$/i.test(val)) ? val : (rgbToHex(val) || def);
        if (cvPrimaryColor) cvPrimaryColor.value = safeHex(design.primary, '#ff6b3d');
        if (cvSecondaryColor) cvSecondaryColor.value = safeHex(design.secondary, '#2e7cff');
        if (cvBgColor) cvBgColor.value = safeHex(design.bg, '#ffffff');
        if (cvSurfaceColor) cvSurfaceColor.value = safeHex(design.surface, '#f6f7fb');
        if (cvTextColor) cvTextColor.value = safeHex(design.text, '#0f1116');
        if (cvMutedColor) cvMutedColor.value = safeHex(design.muted, '#4b5565');
        if (accentColorInput) accentColorInput.value = safeHex(design.accent, '#ff6b3d');
        if (design.palette && paletteSelect) { paletteSelect.value = design.palette; applyCvClass(design.palette, 'palette-'); }
        if (design.font && fontSelect) { fontSelect.value = design.font; applyCvClass(design.font, 'font-'); }
        if (design.background && backgroundSelect) { backgroundSelect.value = design.background; applyCvClass(design.background, 'bg-'); }
        if (design.sectionStyle && sectionStyleSelect) { sectionStyleSelect.value = design.sectionStyle; applyCvClass(design.sectionStyle, 'section-'); }
        if (design.skillStyle && skillStyleSelect) { skillStyleSelect.value = design.skillStyle; applyCvClass(design.skillStyle, 'skills-style-'); }
        if (design.layout && layoutSelect) { layoutSelect.value = design.layout; applyCvClass(design.layout, 'layout-'); }
        if (design.format && formatSelect) { formatSelect.value = design.format; applyCvClass(design.format, 'a'); }
        updateCvColors();
    }

    function loadFullProject(project) {
        if (project.state) {
            const s = project.state;
            if (s.profile) Object.assign(state.profile, s.profile);
            if (s.socials) Object.assign(state.socials, s.socials);
            if (s.socialIcons) Object.assign(state.socialIcons, s.socialIcons);
            if (s.contactLabels) Object.assign(state.contactLabels, s.contactLabels);
            if (s.sectionHeadings) Object.assign(state.sectionHeadings, s.sectionHeadings);
            if (Array.isArray(s.experience)) state.experience = s.experience;
            if (Array.isArray(s.projects)) state.projects = s.projects;
            if (Array.isArray(s.education)) state.education = s.education;
            if (Array.isArray(s.skills)) state.skills = s.skills;
            if (Array.isArray(s.tools)) state.tools = s.tools;
            if (Array.isArray(s.certs)) state.certs = s.certs;
            if (s.profileImage !== undefined) state.profileImage = s.profileImage;
            if (s.profileShape) state.profileShape = s.profileShape;
            if (s.profileSize) state.profileSize = { ...s.profileSize };
            if (s.qrDataUrl !== undefined) state.qrDataUrl = s.qrDataUrl;
            if (s.qrSize) state.qrSize = s.qrSize;
        }
        if (project.design) {
            const d = project.design;
            if (d.template) {
                document.querySelectorAll('.template-card').forEach(card => {
                    card.classList.toggle('is-active', card.dataset.template === d.template);
                });
                applyCvClass(d.template, 'template-');
            }
            if (d.palette && paletteSelect) { paletteSelect.value = d.palette; applyCvClass(d.palette, 'palette-'); }
            if (d.font && fontSelect) { fontSelect.value = d.font; applyCvClass(d.font, 'font-'); }
            if (d.background && backgroundSelect) { backgroundSelect.value = d.background; applyCvClass(d.background, 'bg-'); }
            if (d.sectionStyle && sectionStyleSelect) { sectionStyleSelect.value = d.sectionStyle; applyCvClass(d.sectionStyle, 'section-'); }
            if (d.skillStyle && skillStyleSelect) { skillStyleSelect.value = d.skillStyle; applyCvClass(d.skillStyle, 'skills-style-'); }
            if (d.layout && layoutSelect) { layoutSelect.value = d.layout; applyCvClass(d.layout, 'layout-'); }
            if (d.format && formatSelect) { formatSelect.value = d.format; applyCvClass(d.format, 'a'); }
            if (d.colors) {
                const c = d.colors;
                const safeHex = (val, def) => (val && /^#[0-9a-f]{6}$/i.test(val)) ? val : def;
                if (cvPrimaryColor) cvPrimaryColor.value = safeHex(c.primary, '#ff6b3d');
                if (cvSecondaryColor) cvSecondaryColor.value = safeHex(c.secondary, '#2e7cff');
                if (cvBgColor) cvBgColor.value = safeHex(c.bg, '#ffffff');
                if (cvSurfaceColor) cvSurfaceColor.value = safeHex(c.surface, '#f6f7fb');
                if (cvTextColor) cvTextColor.value = safeHex(c.text, '#0f1116');
                if (cvMutedColor) cvMutedColor.value = safeHex(c.muted, '#4b5565');
                if (accentColorInput) accentColorInput.value = safeHex(c.accent, '#ff6b3d');
                if (d.hasInlineColors) updateCvColors();
            }
        }
        deletedBoxIds = new Set(Array.isArray(project.deletedBoxIds) ? project.deletedBoxIds : []);
        if (project.page2 && page2) {
            resetPage2Template();
            if (project.page2.visible) {
                page2.classList.remove('is-hidden');
                if (togglePage2Btn) togglePage2Btn.textContent = 'Ta bort sida 2';
            } else {
                page2.classList.add('is-hidden');
                if (togglePage2Btn) togglePage2Btn.textContent = 'Lägg till sida 2';
            }
            if (project.page2.content) restorePage2Content(project.page2.content);
        }
        if (project.pageGap) pageGap = Math.max(MIN_PAGE_GAP, Math.min(MAX_PAGE_GAP, Number(project.pageGap) || 40));
        syncInputs();
        renderEditors();
        renderAll();
        autoFitZoom();
        updatePageBreaker();
        // Restore box positions after render + draggable init
        requestAnimationFrame(() => {
            refreshDraggableBoxes();
            if (project.boxPositions) restoreBoxPositions(project.boxPositions);
        });
    }

    // Project save/load (full state + design)
    const saveDesign = () => {
        const safeName = (state.profile.name || 'CV').trim().replace(/\s+/g, '_');
        const project = {
            version: 2,
            design: {
                template: document.querySelector('.template-card.is-active')?.dataset.template || 'template-minimal',
                palette: paletteSelect.value,
                font: fontSelect.value,
                background: backgroundSelect.value,
                sectionStyle: sectionStyleSelect.value,
                skillStyle: skillStyleSelect.value,
                layout: layoutSelect.value,
                format: formatSelect.value,
                colors: {
                    primary: cvPrimaryColor.value,
                    secondary: cvSecondaryColor.value,
                    bg: cvBgColor.value,
                    surface: cvSurfaceColor.value,
                    text: cvTextColor.value,
                    muted: cvMutedColor.value,
                    accent: accentColorInput.value
                },
                hasInlineColors: hasInlineColorOverrides()
            },
            state: {
                profile: { ...state.profile },
                socials: { ...state.socials },
                socialIcons: { ...state.socialIcons },
                contactLabels: { ...state.contactLabels },
                experience: JSON.parse(JSON.stringify(state.experience)),
                projects: JSON.parse(JSON.stringify(state.projects)),
                education: JSON.parse(JSON.stringify(state.education)),
                skills: JSON.parse(JSON.stringify(state.skills)),
                tools: JSON.parse(JSON.stringify(state.tools)),
                certs: JSON.parse(JSON.stringify(state.certs)),
                sectionHeadings: { ...state.sectionHeadings },
                profileImage: state.profileImage,
                profileShape: state.profileShape,
                profileSize: { ...state.profileSize },
                qrDataUrl: state.qrDataUrl,
                qrSize: state.qrSize
            },
            page2: {
                visible: page2 ? !page2.classList.contains('is-hidden') : false,
                content: collectPage2Content()
            },
            pageGap,
            deletedBoxIds: Array.from(deletedBoxIds),
            boxPositions: collectBoxPositions()
        };
        const json = JSON.stringify(project, null, 2);
        const suggestedName = `${safeName}_CV_${new Date().toISOString().slice(0, 10)}.json`;
        if (window.showSaveFilePicker) {
            (async () => {
                try {
                    const fileHandle = await window.showSaveFilePicker({
                        suggestedName,
                        types: [{ description: 'CV-projekt (JSON)', accept: { 'application/json': ['.json'] } }]
                    });
                    const writable = await fileHandle.createWritable();
                    await writable.write(json);
                    await writable.close();
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        console.error('Kunde inte spara:', err);
                        alert('Kunde inte spara filen: ' + err.message);
                    }
                }
            })();
        } else {
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = suggestedName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    };

    const loadDesign = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const project = JSON.parse(e.target.result);
                if (project.version === 2) {
                    loadFullProject(project);
                } else {
                    loadLegacyDesign(project);
                }
            } catch (err) {
                console.error('JSON load error:', err);
                alert('Kunde inte ladda projekt. Kontrollera att filen är giltig JSON.\nFel: ' + err.message);
            }
        };
        reader.readAsText(file);
    };

// Project listeners (design save/load)
    // Note: loadDesignInput removed - uses dynamic input creation

    const boxStylePresets = {
        clean: { bg: '#ffffff', color: '#0f1116', border: '#d8dee9', borderWidth: 1, padding: 12, radius: 12, shape: 'rectangle' },
        glass: { bg: '#f8fafc', color: '#0f1116', border: '#ffffff', borderWidth: 1, padding: 14, radius: 20, shape: 'squircle' },
        accent: { bg: '#ff6b3d', color: '#ffffff', border: '#ff6b3d', borderWidth: 0, padding: 12, radius: 999, shape: 'pill' },
        outline: { bg: 'transparent', color: '#0f1116', border: '#0f1116', borderWidth: 2, padding: 10, radius: 8, shape: 'rectangle' },
        dark: { bg: '#111827', color: '#f8fafc', border: '#374151', borderWidth: 1, padding: 12, radius: 14, shape: 'rectangle' }
    };

    function setRangeLabel(label, value) {
        if (label) label.textContent = `${Math.round(Number(value) || 0)}px`;
    }

    function applyBoxShape(box, shape) {
        if (!box) return;
        box.classList.remove('box-shape-text', 'box-shape-rectangle', 'box-shape-square', 'box-shape-squircle', 'box-shape-pill', 'box-shape-circle');
        box.dataset.boxShape = shape || 'default';
        if (!shape || shape === 'default') return;
        box.classList.add(`box-shape-${shape}`);
        if (shape === 'text') {
            box.style.backgroundColor = 'transparent';
            box.style.borderWidth = '0px';
            box.style.boxShadow = 'none';
        }
        if (shape === 'square' || shape === 'circle') {
            const rect = box.getBoundingClientRect();
            const size = Math.max(32, Math.round(Math.max(rect.width, rect.height) / (currentZoom || 1)));
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            if (shape === 'circle') box.style.borderRadius = '999px';
        }
        if (shape === 'squircle') box.style.borderRadius = '28px';
        if (shape === 'pill') box.style.borderRadius = '999px';
    }

    function getActiveBoxStyle() {
        return {
            bg: boxBgColor?.value || '#f6f7fb',
            color: boxTextColor?.value || '#0f1116',
            border: boxBorderColor?.value || '#0a0a0a',
            borderWidth: Number(boxBorderWidthInput?.value) || 0,
            padding: Number(boxPaddingInput?.value) || 0,
            radius: Number(boxRadiusInput?.value) || 0,
            shape: boxShapeSelect?.value || 'default',
            fontWeight: boxBoldInput?.checked ? '700' : '400'
        };
    }

    function applyBoxStyle(box, style) {
        if (!box || !style) return;
        box.classList.add('has-box-style');
        box.style.backgroundColor = style.bg;
        box.style.color = style.color;
        box.style.borderColor = style.border;
        box.style.borderStyle = style.borderWidth > 0 ? 'solid' : 'none';
        box.style.borderWidth = `${style.borderWidth}px`;
        box.style.padding = `${style.padding}px`;
        box.style.borderRadius = `${style.radius}px`;
        box.style.fontWeight = style.fontWeight || '400';
        box.style.setProperty('--box-bg', style.bg);
        box.style.setProperty('--box-color', style.color);
        box.style.setProperty('--box-border', style.border);
        box.style.setProperty('--box-padding', `${style.padding}px`);
        box.style.setProperty('--box-radius', `${style.radius}px`);
        box.style.setProperty('--box-font-weight', style.fontWeight || '400');
        applyBoxShape(box, style.shape);
    }

    const updateBoxStyle = () => {
        if (!activeBox) return;
        if (boxStylePreset) boxStylePreset.value = 'custom';
        applyBoxStyle(activeBox, getActiveBoxStyle());
    };

    const updateActiveBoxStylePreview = () => {
        if (!activeBox) {
            if (boxBgColor) boxBgColor.value = '#f6f7fb';
            if (boxTextColor) boxTextColor.value = '#0f1116';
            if (boxBorderColor) boxBorderColor.value = '#0a0a0a';
            if (boxPaddingInput) boxPaddingInput.value = 12;
            if (boxRadiusInput) boxRadiusInput.value = 12;
            if (boxBorderWidthInput) boxBorderWidthInput.value = 1;
            if (boxBoldInput) boxBoldInput.checked = false;
            if (boxShapeSelect) boxShapeSelect.value = 'default';
            if (boxStylePreset) boxStylePreset.value = 'custom';
            setRangeLabel(boxPaddingLbl, 12);
            setRangeLabel(boxRadiusLbl, 12);
            setRangeLabel(boxBorderWidthLbl, 1);
            return;
        }
        const computed = getComputedStyle(activeBox);
        if (boxBgColor) boxBgColor.value = rgbToHex(computed.backgroundColor) || '#f6f7fb';
        if (boxTextColor) boxTextColor.value = rgbToHex(computed.color) || '#0f1116';
        if (boxBorderColor) boxBorderColor.value = rgbToHex(computed.borderColor) || '#0a0a0a';
        const padding = parseFloat(activeBox.style.padding || computed.paddingTop) || 0;
        const radius = parseFloat(activeBox.style.borderRadius || computed.borderTopLeftRadius) || 0;
        const borderWidth = parseFloat(activeBox.style.borderWidth || computed.borderTopWidth) || 0;
        if (boxPaddingInput) boxPaddingInput.value = Math.round(padding);
        if (boxRadiusInput) boxRadiusInput.value = Math.min(80, Math.round(radius));
        if (boxBorderWidthInput) boxBorderWidthInput.value = Math.round(borderWidth);
        if (boxBoldInput) boxBoldInput.checked = Number(computed.fontWeight) >= 600;
        if (boxShapeSelect) boxShapeSelect.value = activeBox.dataset.boxShape || 'default';
        if (boxStylePreset) boxStylePreset.value = 'custom';
        setRangeLabel(boxPaddingLbl, padding);
        setRangeLabel(boxRadiusLbl, radius);
        setRangeLabel(boxBorderWidthLbl, borderWidth);
    };

function rgbToHex(color) {
        if (!color) return null;
        if (color.startsWith('#')) return color;

        // Handle rgba(r,g,b,a) or rgb(r,g,b)
        const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        if (rgbaMatch) {
            const r = parseInt(rgbaMatch[1]).toString(16).padStart(2, '0');
            const g = parseInt(rgbaMatch[2]).toString(16).padStart(2, '0');
            const b = parseInt(rgbaMatch[3]).toString(16).padStart(2, '0');
            return '#' + r + g + b;
        }

        // Fallback for other formats (named colors etc.)
        try {
            const div = document.createElement('div');
            div.style.color = color;
            document.body.appendChild(div);
            const computed = window.getComputedStyle(div).color;
            document.body.removeChild(div);
            return rgbToHex(computed); // Recursive call for computed rgb
        } catch (e) {
            return null;
        }
    }

    [boxBgColor, boxTextColor, boxBorderColor, boxPaddingInput, boxRadiusInput, boxBorderWidthInput, boxShapeSelect, boxBoldInput].forEach((control) => {
        if (!control) return;
        control.addEventListener('input', () => {
            setRangeLabel(boxPaddingLbl, boxPaddingInput?.value || 0);
            setRangeLabel(boxRadiusLbl, boxRadiusInput?.value || 0);
            setRangeLabel(boxBorderWidthLbl, boxBorderWidthInput?.value || 0);
            updateBoxStyle();
        });
        control.addEventListener('change', updateBoxStyle);
    });
    if (boxStylePreset) {
        boxStylePreset.addEventListener('change', () => {
            const preset = boxStylePresets[boxStylePreset.value];
            if (!preset || !activeBox) return;
            if (boxBgColor) boxBgColor.value = preset.bg === 'transparent' ? '#ffffff' : preset.bg;
            if (boxTextColor) boxTextColor.value = preset.color;
            if (boxBorderColor) boxBorderColor.value = preset.border;
            if (boxPaddingInput) boxPaddingInput.value = preset.padding;
            if (boxRadiusInput) boxRadiusInput.value = Math.min(80, preset.radius);
            if (boxBorderWidthInput) boxBorderWidthInput.value = preset.borderWidth;
            if (boxBoldInput) boxBoldInput.checked = preset.fontWeight === '700';
            if (boxShapeSelect) boxShapeSelect.value = preset.shape;
            setRangeLabel(boxPaddingLbl, preset.padding);
            setRangeLabel(boxRadiusLbl, preset.radius);
            setRangeLabel(boxBorderWidthLbl, preset.borderWidth);
            applyBoxStyle(activeBox, preset);
        });
    }
    if (applyBoxStyleAllBtn) {
        applyBoxStyleAllBtn.addEventListener('click', () => {
            const style = getActiveBoxStyle();
            cvPages.querySelectorAll('.draggable-box').forEach((box) => applyBoxStyle(box, style));
        });
    }
    clearBoxStyleBtn.addEventListener('click', () => {
        if (activeBox) {
            activeBox.style.backgroundColor = '';
            activeBox.style.color = '';
            activeBox.style.borderColor = '';
            activeBox.style.borderStyle = '';
            activeBox.style.borderWidth = '';
            activeBox.style.padding = '';
            activeBox.style.borderRadius = '';
            activeBox.style.fontWeight = '';
            activeBox.style.boxShadow = '';
            activeBox.style.removeProperty('--box-bg');
            activeBox.style.removeProperty('--box-color');
            activeBox.style.removeProperty('--box-border');
            activeBox.style.removeProperty('--box-padding');
            activeBox.style.removeProperty('--box-radius');
            activeBox.style.removeProperty('--box-font-weight');
            activeBox.classList.remove('box-shape-text', 'box-shape-rectangle', 'box-shape-square', 'box-shape-squircle', 'box-shape-pill', 'box-shape-circle');
            activeBox.classList.remove('has-box-style');
            delete activeBox.dataset.boxShape;
            updateActiveBoxStylePreview();
        }
    });

    // Update preview when box selected
    const originalSetActiveBox = setActiveBox;
    setActiveBox = (box) => {
        originalSetActiveBox(box);
        updateActiveBoxStylePreview();
    };

    function syncInputs() {
        setInputValue(nameInput, state.profile.name);
        setInputValue(titleInput, state.profile.title);
        setInputValue(emailInput, state.profile.email);
        setInputValue(phoneInput, state.profile.phone);
        setInputValue(locationInput, state.profile.location);
        setInputValue(websiteInput, state.profile.website);
        setInputValue(emailLabelInput, state.contactLabels.email);
        setInputValue(phoneLabelInput, state.contactLabels.phone);
        setInputValue(locationLabelInput, state.contactLabels.location);
        setInputValue(websiteLabelInput, state.contactLabels.website);
        setInputValue(taglineInput, state.profile.tagline);
        setInputValue(portfolioInput, state.profile.portfolio);

        if (qrSizeInput) {
            qrSizeInput.value = state.qrSize || 120;
            if (qrSizeLbl) qrSizeLbl.textContent = `${state.qrSize || 120}px`;
        }

        if (profileShapeSelect) {
            setInputValue(profileShapeSelect, state.profileShape);
        }
        if (profileWidthInput) {
            profileWidthInput.value = state.profileSize.width;
        }
        if (profileHeightInput) {
            profileHeightInput.value = state.profileSize.height;
        }

        setInputValue(linkedinInput, state.socials.linkedin);
        setInputValue(behanceInput, state.socials.behance);
        setInputValue(instagramInput, state.socials.instagram);
        setInputValue(tiktokInput, state.socials.tiktok);
        setInputValue(youtubeInput, state.socials.youtube);
        setInputValue(vimeoInput, state.socials.vimeo);
        document.querySelectorAll('[data-social-icon]').forEach((select) => {
            select.value = getSocialIconKey(select.dataset.socialIcon);
        });
    }

    function loadProfileImage(file) {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            state.profileImage = reader.result;
            updateProfilePreview();
        };
        reader.readAsDataURL(file);
    }

    function loadImageForCanvas(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error('Kunde inte läsa bild för PDF-komprimering.'));
            img.src = src;
        });
    }

    async function compressImageForPdf(src, maxEdge = 900, quality = 0.74) {
        if (!src || !src.startsWith('data:image/') || src.startsWith('data:image/svg')) return '';
        const img = await loadImageForCanvas(src);
        const sourceW = img.naturalWidth || img.width;
        const sourceH = img.naturalHeight || img.height;
        if (!sourceW || !sourceH) return '';
        const scale = Math.min(1, maxEdge / Math.max(sourceW, sourceH));
        const width = Math.max(1, Math.round(sourceW * scale));
        const height = Math.max(1, Math.round(sourceH * scale));
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL('image/jpeg', quality);
        return compressed.length < src.length ? compressed : '';
    }

    function createLiquidGlassPdfBackground(accentRgb, accent2Rgb, isA3) {
        const width = isA3 ? 980 : 820;
        const height = Math.round(width * Math.SQRT2);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        const base = ctx.createLinearGradient(0, 0, width, height);
        base.addColorStop(0, '#f8fbff');
        base.addColorStop(0.48, '#eef7ff');
        base.addColorStop(1, '#fbf7ff');
        ctx.fillStyle = base;
        ctx.fillRect(0, 0, width, height);

        const paintFade = (x, y, radius, color) => {
            const fade = ctx.createRadialGradient(x, y, 0, x, y, radius);
            fade.addColorStop(0, color);
            fade.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = fade;
            ctx.fillRect(0, 0, width, height);
        };
        paintFade(width * 0.18, height * 0.12, width * 0.55, `rgba(${accentRgb}, 0.18)`);
        paintFade(width * 0.88, height * 0.88, width * 0.58, `rgba(${accent2Rgb}, 0.15)`);
        paintFade(width * 0.58, height * 0.94, width * 0.42, 'rgba(255,255,255,0.58)');
        return canvas.toDataURL('image/jpeg', 0.72);
    }

    async function prepareCompressedPdfAssets(isLiquidGlass, accentRgb, accent2Rgb, isA3) {
        const restore = [];
        const images = Array.from(cvPages.querySelectorAll('img'));
        for (const img of images) {
            const src = img.currentSrc || img.src || '';
            const maxEdge = img.closest('.project-thumb') ? 360 : img.closest('.profile-photo') ? 640 : 900;
            try {
                const compressed = await compressImageForPdf(src, maxEdge, 0.74);
                if (compressed) {
                    restore.push(() => { img.src = src; });
                    img.src = compressed;
                }
            } catch (err) {
                console.warn('PDF image compression skipped', err);
            }
        }
        return {
            liquidBackground: isLiquidGlass ? createLiquidGlassPdfBackground(accentRgb, accent2Rgb, isA3) : '',
            restore: () => restore.reverse().forEach(fn => fn())
        };
    }

    function parseRgbParts(color, fallback = '0, 0, 0') {
        const probe = document.createElement('span');
        probe.style.color = color || `rgb(${fallback})`;
        document.body.appendChild(probe);
        const computed = makeCanvasSafeCss(getComputedStyle(probe).color);
        probe.remove();
        const modernMatch = computed.match(/rgba?\((\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)(?:\s*\/\s*[\d.]+%?)?\)/);
        const legacyMatch = computed.match(/rgba?\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)/);
        const match = modernMatch || legacyMatch;
        if (!match) return fallback;
        return `${Math.round(Number(match[1]))}, ${Math.round(Number(match[2]))}, ${Math.round(Number(match[3]))}`;
    }

    function cssColorFunctionToRgba(match, components) {
        const [channels, alphaPart = '1'] = components.split('/').map(part => part.trim());
        const values = channels.split(/[\s,]+/).filter(Boolean).slice(0, 3);
        if (values.length < 3) return match;
        const toByte = (value) => {
            const trimmed = value.trim();
            const number = Number.parseFloat(trimmed);
            if (!Number.isFinite(number)) return 0;
            if (trimmed.endsWith('%')) return Math.round(Math.min(Math.max(number, 0), 100) * 2.55);
            return Math.round(Math.min(Math.max(number, 0), 1) * 255);
        };
        const toAlpha = (value) => {
            const number = Number.parseFloat(value);
            if (!Number.isFinite(number)) return 1;
            return value.endsWith('%')
                ? Math.min(Math.max(number / 100, 0), 1)
                : Math.min(Math.max(number, 0), 1);
        };
        return `rgba(${toByte(values[0])}, ${toByte(values[1])}, ${toByte(values[2])}, ${toAlpha(alphaPart)})`;
    }

    function makeCanvasSafeCss(value) {
        if (!value || !value.includes('color(')) return value;
        return value.replace(/color\(\s*[a-z0-9-]+\s+([^)]*)\)/gi, cssColorFunctionToRgba);
    }

    function makePngExportCloneSafe(clonedDoc) {
        const clonedPages = clonedDoc.getElementById('cv-pages');
        if (!clonedPages) return;

        const exportStyle = clonedDoc.createElement('style');
        exportStyle.textContent = `
            *,
            *::before,
            *::after {
                background-image: none !important;
                box-shadow: none !important;
                text-shadow: none !important;
            }
            .cv,
            .cv::before,
            .cv::after,
            .cv-bg-shape,
            .cv-bg-shape-alt,
            .cv-header,
            .profile-photo,
            .entry,
            .project-card,
            .tool-chip,
            .social-link,
            .qr-card,
            .contact-item,
            .editable-block,
            .title-pill,
            .meter-bar,
            .meter-bar span,
            .meter-dot,
            .meter-star {
                backdrop-filter: none !important;
                -webkit-backdrop-filter: none !important;
            }
            #cv-pages *::before,
            #cv-pages *::after {
                background: none !important;
                background-image: none !important;
                box-shadow: none !important;
                color: inherit !important;
                border-color: currentColor !important;
            }
            #cv-pages .cv::before,
            #cv-pages .cv::after,
            #cv-pages .template-liquid-glass.cv::before,
            #cv-pages .template-liquid-glass.cv::after,
            #cv-pages .cv-bg-shape,
            #cv-pages .cv-bg-shape-alt {
                background: none !important;
                background-image: none !important;
                filter: none !important;
            }
            .bg-story {
                --cv-bg-overlay: linear-gradient(90deg, rgba(15, 17, 22, 0.04) 1px, transparent 1px) !important;
            }
        `;
        clonedDoc.head.appendChild(exportStyle);

        const sourcePages = Array.from(cvPages.querySelectorAll('.cv'));
        const targetPages = Array.from(clonedPages.querySelectorAll('.cv'));
        targetPages.forEach((page, index) => {
            const sourcePage = sourcePages[index] || sourcePages[0] || cv;
            const sourceStyles = getComputedStyle(sourcePage);
            const accentRgb = parseRgbParts(sourceStyles.getPropertyValue('--cv-accent') || accentColorInput?.value, '255, 107, 61');
            const accent2Rgb = parseRgbParts(sourceStyles.getPropertyValue('--cv-accent-2') || cvSecondaryColor?.value, '46, 124, 255');
            const primaryRgb = parseRgbParts(sourceStyles.getPropertyValue('--cv-primary'), accentRgb);
            const secondaryRgb = parseRgbParts(sourceStyles.getPropertyValue('--cv-secondary'), accent2Rgb);
            const textRgb = parseRgbParts(sourceStyles.getPropertyValue('--cv-text'), '15, 17, 22');
            const mutedRgb = parseRgbParts(sourceStyles.getPropertyValue('--cv-muted'), '82, 97, 115');
            const shadowRgb = parseRgbParts(sourceStyles.getPropertyValue('--cv-shadow'), '15, 23, 42');
            const pageBackground = makeCanvasSafeCss(sourceStyles.getPropertyValue('background'));

            if (pageBackground) page.style.setProperty('background', pageBackground, 'important');
            page.style.setProperty('--cv-primary', `rgb(${primaryRgb})`);
            page.style.setProperty('--cv-secondary', `rgb(${secondaryRgb})`);
            page.style.setProperty('--cv-accent', `rgb(${accentRgb})`);
            page.style.setProperty('--cv-accent-2', `rgb(${accent2Rgb})`);
            page.style.setProperty('--cv-text', `rgb(${textRgb})`);
            page.style.setProperty('--cv-muted', `rgb(${mutedRgb})`);
            page.style.setProperty('--cv-hairline', `rgba(${textRgb}, 0.12)`);
            page.style.setProperty('--cv-glass', 'rgba(255, 255, 255, 0.52)');
            page.style.setProperty('--cv-ink-soft', `rgba(${textRgb}, 0.78)`);
            page.style.setProperty('--cv-card-shadow', `0 18px 50px rgba(${shadowRgb}, 0.16)`);
            page.style.setProperty('--liquid-tint-a', `rgba(${accentRgb}, 0.20)`);
            page.style.setProperty('--liquid-tint-b', `rgba(${accent2Rgb}, 0.18)`);

            if (page.classList.contains('bg-clean')) {
                page.style.setProperty('--cv-bg-pattern', `linear-gradient(90deg, rgba(${textRgb}, 0.04) 1px, transparent 1px)`);
                page.style.setProperty('--cv-bg-overlay', `linear-gradient(135deg, transparent 0 58%, rgba(${accentRgb}, 0.05) 58% 100%)`);
            }
            if (page.classList.contains('bg-gradient')) {
                page.style.setProperty('--cv-bg', `linear-gradient(135deg, rgba(${accentRgb}, 0.18), #ffffff 48%, rgba(${accent2Rgb}, 0.17))`);
                page.style.setProperty('--cv-bg-pattern', `linear-gradient(135deg, rgba(${accentRgb}, 0.24), transparent 35%, rgba(${accent2Rgb}, 0.18))`);
                page.style.setProperty('--cv-bg-overlay', `repeating-linear-gradient(135deg, rgba(${textRgb}, 0.05) 0 1px, transparent 1px 18px)`);
            }
            if (page.classList.contains('bg-story')) {
                page.style.setProperty('--cv-bg-pattern', `linear-gradient(135deg, rgba(${accentRgb}, 0.22), transparent 44%, rgba(${accent2Rgb}, 0.18))`);
                page.style.setProperty('--cv-bg-overlay', `linear-gradient(90deg, rgba(${textRgb}, 0.04) 1px, transparent 1px)`);
            }
        });

        clonedPages.querySelectorAll('*').forEach((el) => {
            const styles = clonedDoc.defaultView.getComputedStyle(el);
            Array.from(styles).forEach((prop) => {
                const value = styles.getPropertyValue(prop);
                const safeValue = makeCanvasSafeCss(value);
                if (safeValue !== value) el.style.setProperty(prop, safeValue, 'important');
            });
        });
    }

    templateGrid.addEventListener('click', (event) => {
        const button = event.target.closest('[data-template]');
        if (!button) return;
        const templateClass = button.dataset.template;
        templateGrid.querySelectorAll('[data-template]').forEach((card) => card.classList.remove('is-active'));
        button.classList.add('is-active');
        applyCvClass(templateClass, 'template-');
        applyTemplateDefaults(templateClass);
    });

    formatSelect.addEventListener('change', () => {
        applyCvClass(formatSelect.value, 'a');
        autoFitZoom();
    });

    layoutSelect.addEventListener('change', () => applyCvClass(layoutSelect.value, 'layout-'));
    paletteSelect.addEventListener('change', () => {
        applyPalette(paletteSelect.value);
    });
    fontSelect.addEventListener('change', () => applyCvClass(fontSelect.value, 'font-'));
    backgroundSelect.addEventListener('change', () => applyCvClass(backgroundSelect.value, 'bg-'));
    sectionStyleSelect.addEventListener('change', () => applyCvClass(sectionStyleSelect.value, 'section-'));
    skillStyleSelect.addEventListener('change', () => applyCvClass(skillStyleSelect.value, 'skills-style-'));

    // New color pickers for full CV customization
    // Set vars directly on .cv elements so they override palette class variables (which are also on .cv)
    const updateCvColors = () => {
        cvPages.querySelectorAll('.cv').forEach(page => {
            page.style.setProperty('--cv-primary', cvPrimaryColor.value);
            page.style.setProperty('--cv-secondary', cvSecondaryColor.value);
            page.style.setProperty('--cv-bg', cvBgColor.value);
            page.style.setProperty('--cv-surface', cvSurfaceColor.value);
            page.style.setProperty('--cv-text', cvTextColor.value);
            page.style.setProperty('--cv-muted', cvMutedColor.value);
            page.style.setProperty('--cv-accent', accentColorInput.value || cvPrimaryColor.value);
            page.style.setProperty('--cv-accent-2', cvSecondaryColor.value);
        });
    };

    cvPrimaryColor.addEventListener('input', updateCvColors);
    cvSecondaryColor.addEventListener('input', updateCvColors);
    cvBgColor.addEventListener('input', updateCvColors);
    cvSurfaceColor.addEventListener('input', updateCvColors);
    cvTextColor.addEventListener('input', updateCvColors);
    cvMutedColor.addEventListener('input', updateCvColors);

    accentColorInput.addEventListener('input', () => {
        cvPages.querySelectorAll('.cv').forEach(page => {
            page.style.setProperty('--cv-accent', accentColorInput.value);
        });
    });

    nameInput.addEventListener('input', () => {
        state.profile.name = nameInput.value;
        updateProfilePreview();
    });

    titleInput.addEventListener('input', () => {
        state.profile.title = titleInput.value;
        updateProfilePreview();
    });

    emailInput.addEventListener('input', () => {
        state.profile.email = emailInput.value;
        updateContact();
    });

    phoneInput.addEventListener('input', () => {
        state.profile.phone = phoneInput.value;
        updateContact();
    });

    locationInput.addEventListener('input', () => {
        state.profile.location = locationInput.value;
        updateContact();
    });

    websiteInput.addEventListener('input', () => {
        state.profile.website = websiteInput.value;
        updateContact();
    });

    const contactLabelInputs = {
        email: emailLabelInput,
        phone: phoneLabelInput,
        location: locationLabelInput,
        website: websiteLabelInput
    };
    Object.entries(contactLabelInputs).forEach(([field, input]) => {
        if (!input) return;
        input.addEventListener('input', () => {
            state.contactLabels[field] = input.value;
            updateContact();
        });
    });

    taglineInput.addEventListener('input', () => {
        state.profile.tagline = taglineInput.value;
        updateProfilePreview();
    });

    portfolioInput.addEventListener('input', () => {
        state.profile.portfolio = portfolioInput.value;
        renderQr();
    });

    generateQrBtn.addEventListener('click', () => {
        generateQr();
    });

    if (qrSizeInput) {
        qrSizeInput.addEventListener('input', () => {
            const size = Math.max(40, Math.min(300, Number(qrSizeInput.value)));
            state.qrSize = size;
            if (qrSizeLbl) qrSizeLbl.textContent = `${size}px`;
            applyQrSize();
        });
    }

    linkedinInput.addEventListener('input', () => {
        state.socials.linkedin = linkedinInput.value;
        renderSocials();
    });
    behanceInput.addEventListener('input', () => {
        state.socials.behance = behanceInput.value;
        renderSocials();
    });
    instagramInput.addEventListener('input', () => {
        state.socials.instagram = instagramInput.value;
        renderSocials();
    });
    tiktokInput.addEventListener('input', () => {
        state.socials.tiktok = tiktokInput.value;
        renderSocials();
    });
    youtubeInput.addEventListener('input', () => {
        state.socials.youtube = youtubeInput.value;
        renderSocials();
    });
    vimeoInput.addEventListener('input', () => {
        state.socials.vimeo = vimeoInput.value;
        renderSocials();
    });
    document.querySelectorAll('[data-social-icon]').forEach((select) => {
        select.value = getSocialIconKey(select.dataset.socialIcon);
        select.addEventListener('change', () => {
            state.socialIcons[select.dataset.socialIcon] = select.value;
            renderSocials();
        });
    });

    profileImageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        loadProfileImage(file);
        profileImageInput.value = '';
    });

    profileDrop.addEventListener('dragover', (event) => {
        event.preventDefault();
        profileDrop.classList.add('is-dragging');
    });

    profileDrop.addEventListener('click', (event) => {
        if (event.target.closest('#remove-profile-btn')) return;
        profileImageInput.click();
    });

    profileDrop.addEventListener('dragleave', () => {
        profileDrop.classList.remove('is-dragging');
    });

    profileDrop.addEventListener('drop', (event) => {
        event.preventDefault();
        profileDrop.classList.remove('is-dragging');
        const file = event.dataTransfer.files[0];
        loadProfileImage(file);
    });

    cvPages.addEventListener('input', (event) => {
        // Section heading h3 edits
        const heading = event.target.closest('h3[id^="heading-"]');
        if (heading) {
            const text = Array.from(heading.childNodes)
                .filter(n => n.nodeType === Node.TEXT_NODE)
                .map(n => n.textContent)
                .join('');
            state.sectionHeadings[heading.id] = text;
            return;
        }
        const editable = event.target.closest('[contenteditable="true"][data-section]');
        if (!editable) return;
        handleEditableInput(editable);
    });

    cvPages.addEventListener('click', (event) => {
        const editableLink = event.target.closest('a[contenteditable="true"]');
        if (editableLink) event.preventDefault();
    });

    cvPages.addEventListener('pointerdown', (event) => {
        const breaker = event.target.closest('.page-breaker-line');
        if (breaker && !breaker.classList.contains('is-hidden')) {
            event.preventDefault();
            isDraggingBreaker = true;
            breakerStartY = event.clientY;
            breakerStartGap = pageGap;
            breaker.classList.add('dragging');
            return;
        }

        const deleteBtn = event.target.closest('.box-delete-btn');
        if (deleteBtn) {
            event.preventDefault();
            event.stopPropagation();
            deleteDraggableBox(deleteBtn.closest('.draggable-box'));
            return;
        }

        const resizeHandle = event.target.closest('.box-resize-handle');
        const dragHandle = event.target.closest('.box-drag-handle');
        const box = event.target.closest('.draggable-box');
        if (!box) return;

        if (!resizeHandle && !dragHandle) {
            const editable = event.target.closest('[contenteditable="true"]');
            if (editable) {
                setActiveBox(box);
                return;
            }
            if (event.target.closest('input, textarea, select, button')) return;
        }

        event.preventDefault();
        setActiveBox(box);
        box.classList.add('dragging');

        dragStartX = event.clientX;
        dragStartY = event.clientY;
        boxStartX = parseFloat(box.style.getPropertyValue('--box-x')) || 0;
        boxStartY = parseFloat(box.style.getPropertyValue('--box-y')) || 0;
        const boxRect = box.getBoundingClientRect();
        const boxScale = parseFloat(box.style.getPropertyValue('--box-scale')) || 1;
        boxStartWidth = boxRect.width / (currentZoom * boxScale);
        boxStartHeight = boxRect.height / (currentZoom * boxScale);

        if (resizeHandle) {
            isResizingBox = true;
        } else {
            isDraggingBox = true;
        }
    });

    document.addEventListener('pointermove', (event) => {
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;

        if (isDraggingBreaker) {
            const dy = (event.clientY - breakerStartY) / currentZoom;
            pageGap = Math.max(MIN_PAGE_GAP, Math.min(MAX_PAGE_GAP, snapValue(breakerStartGap + dy)));
            updatePageBreaker();
            return;
        }

        if (!activeBox) return;
        if (!isDraggingBox && !isResizingBox) return;

        const dx = (event.clientX - dragStartX) / currentZoom;
        const dy = (event.clientY - dragStartY) / currentZoom;

        if (isDraggingBox) {
            const newX = snapValue(boxStartX + dx);
            const newY = snapValue(boxStartY + dy);
            activeBox.style.setProperty('--box-x', `${newX}px`);
            activeBox.style.setProperty('--box-y', `${newY}px`);
        }

        if (isResizingBox) {
            const nextWidth = Math.max(24, snapValue(boxStartWidth + dx));
            const nextHeight = Math.max(18, snapValue(boxStartHeight + dy));
            activeBox.style.width = `${nextWidth}px`;
            activeBox.style.height = `${nextHeight}px`;
        }
    });

    document.addEventListener('pointerup', () => {
        if (isDraggingBreaker) {
            const breaker = cvPages.querySelector(':scope > .page-breaker-line');
            if (breaker) breaker.classList.remove('dragging');
            isDraggingBreaker = false;
            updatePageBreaker();
            return;
        }
        const wasDragging = isDraggingBox;
        if (activeBox) activeBox.classList.remove('dragging');
        if (wasDragging && activeBox) {
            const targetPage = document.elementsFromPoint(lastPointerX, lastPointerY)
                .map((el) => el.closest?.('.cv'))
                .find(Boolean);
            moveBoxToPage(activeBox, targetPage, lastPointerX, lastPointerY);
        }
        isDraggingBox = false;
        isResizingBox = false;
    });

    document.addEventListener('pointerdown', (event) => {
        if (!event.target.closest('.draggable-box') && !event.target.closest('.panels-dock')) {
            setActiveBox(null);
        }
    });

    cvPages.addEventListener('blur', (event) => {
        const editable = event.target.closest('[contenteditable="true"][data-section]');
        if (!editable) return;
        handleEditableBlur(editable);
    }, true);

    removeProfileBtn.addEventListener('click', () => {
        state.profileImage = '';
        updateProfilePreview();
    });

    if (profileShapeSelect) {
        profileShapeSelect.addEventListener('change', (e) => {
            state.profileShape = e.target.value;
            updateProfilePreview();
        });
    }

    if (profileWidthInput) {
        profileWidthInput.addEventListener('input', (e) => {
            const width = Math.max(80, Math.min(300, parseInt(e.target.value) || 120));
            state.profileSize.width = width;
            e.target.value = width;
            updateProfilePreview();
        });
    }

    if (profileHeightInput) {
        profileHeightInput.addEventListener('input', (e) => {
            const height = Math.max(80, Math.min(300, parseInt(e.target.value) || 120));
            state.profileSize.height = height;
            e.target.value = height;
            updateProfilePreview();
        });
    }

    addExperienceBtn.addEventListener('click', () => {
        state.experience.push({ role: '', company: '', period: '', description: '' });
        renderEditors();
        renderExperience();
    });

    addProjectBtn.addEventListener('click', () => {
        state.projects.push({ title: '', role: '', link: '', video: '', description: '', thumbUrl: '', thumbData: '' });
        renderEditors();
        renderProjects();
    });

    addEducationBtn.addEventListener('click', () => {
        state.education.push({ program: '', school: '', period: '', description: '' });
        renderEditors();
        renderEducation();
    });

    addSkillBtn.addEventListener('click', () => {
        state.skills.push({ name: '', level: 50 });
        renderEditors();
        renderSkills();
    });

    addToolBtn.addEventListener('click', () => {
        state.tools.push({ name: '' });
        renderEditors();
        renderTools();
    });

    addCertBtn.addEventListener('click', () => {
        state.certs.push({ name: '', issuer: '', year: '', link: '' });
        renderEditors();
        renderCerts();
    });

    if (togglePage2Btn && page2) {
        togglePage2Btn.addEventListener('click', () => {
            const isHidden = page2.classList.toggle('is-hidden');
            togglePage2Btn.textContent = isHidden ? 'Lägg till sida 2' : 'Ta bort sida 2';
            autoFitZoom();
            updatePageBreaker();
        });
    }

    zoomInBtn.addEventListener('click', () => {
        if (currentZoom < 1.5) {
            currentZoom += ZOOM_STEP;
            updateZoom();
        }
    });

    zoomOutBtn.addEventListener('click', () => {
        if (currentZoom > 0.2) {
            currentZoom -= ZOOM_STEP;
            updateZoom();
        }
    });

    exportPdfBtn.addEventListener('click', async () => {
        // Scroll to top for proper PDF positioning
        window.scrollTo(0, 0);
        const originalLabel = exportPdfBtn.textContent;
        exportPdfBtn.textContent = 'Komprimerar PDF...';
        exportPdfBtn.disabled = true;
        const isA3 = formatSelect.value === 'a3';
        const cvW = isA3 ? '297mm' : '210mm';
        const cvH = isA3 ? '420mm' : '297mm';
        const pageSize = isA3 ? 'A3 portrait' : 'A4 portrait';
        const safeName = (state.profile.name || 'CV').trim().replace(/\s+/g, '_');
        
        const styleId = 'dynamic-print-style';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }
        const samplePage = Array.from(cvPages.querySelectorAll('.cv')).find((page) => !page.classList.contains('is-hidden')) || cv;
        const freezeComputed = (selector, element, props) => {
            if (!element) return '';
            const styles = getComputedStyle(element);
            const declarations = props
                .map((prop) => {
                    let value = styles.getPropertyValue(prop);
                    if (prop === 'padding') value = `${styles.paddingTop} ${styles.paddingRight} ${styles.paddingBottom} ${styles.paddingLeft}`;
                    if (prop === 'margin') value = `${styles.marginTop} ${styles.marginRight} ${styles.marginBottom} ${styles.marginLeft}`;
                    return value ? `${prop}: ${value} !important;` : '';
                })
                .filter(Boolean)
                .join('\n');
            return declarations ? `${selector} {\n${declarations}\n}` : '';
        };
        const colorToRgbParts = (color, fallback) => {
            const probe = document.createElement('span');
            probe.style.color = color || fallback;
            document.body.appendChild(probe);
            const computed = getComputedStyle(probe).color;
            probe.remove();
            const match = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            return match ? `${match[1]}, ${match[2]}, ${match[3]}` : fallback;
        };
        const accentRgb = colorToRgbParts(accentColorInput?.value || cvPrimaryColor?.value, '125, 211, 252');
        const accent2Rgb = colorToRgbParts(cvSecondaryColor?.value, '192, 132, 252');
        const isLiquidGlassExport = samplePage?.classList.contains('template-liquid-glass');
        const pdfAssets = await prepareCompressedPdfAssets(isLiquidGlassExport, accentRgb, accent2Rgb, isA3);
        const liquidGlassPrintLock = samplePage?.classList.contains('template-liquid-glass') ? `
                .template-liquid-glass {
                    background: #f8fbff url("${pdfAssets.liquidBackground}") center / cover no-repeat !important;
                }
                .template-liquid-glass::before,
                .template-liquid-glass::after,
                .template-liquid-glass .cv-bg-shape,
                .template-liquid-glass .cv-bg-shape-alt {
                    display: none !important;
                }
                .template-liquid-glass .cv-header,
                .template-liquid-glass .profile-photo,
                .template-liquid-glass .entry,
                .template-liquid-glass .project-card,
                .template-liquid-glass .tool-chip,
                .template-liquid-glass .social-link,
                .template-liquid-glass .qr-card,
                .template-liquid-glass .contact-item,
                .template-liquid-glass .editable-block {
                    backdrop-filter: none !important;
                    -webkit-backdrop-filter: none !important;
                    filter: none !important;
                    border-color: rgba(185, 199, 218, 0.72) !important;
                    box-shadow:
                        inset 0 1px 0 rgba(255, 255, 255, 0.92),
                        inset 0 -22px 34px rgba(${accentRgb}, 0.14),
                        0 20px 48px rgba(15, 23, 42, 0.12) !important;
                }
                .template-liquid-glass .tool-chip,
                .template-liquid-glass .social-link,
                .template-liquid-glass .contact-item {
                    box-shadow:
                        inset 0 1px 0 rgba(255, 255, 255, 0.86),
                        0 10px 24px rgba(15, 23, 42, 0.10) !important;
                }
                .template-liquid-glass.cv-page-2 {
                    padding-right: 18mm !important;
                }
                .template-liquid-glass.cv-page-2 .cv-grid {
                    padding-right: 0 !important;
                    box-sizing: border-box !important;
                    min-width: 0 !important;
                }
                .template-liquid-glass.cv-page-2 .cv-main,
                .template-liquid-glass.cv-page-2 .cv-side {
                    min-width: 0 !important;
                }
                .template-liquid-glass.cv-page-2 .cv-header,
                .template-liquid-glass.cv-page-2 .editable-block,
                .template-liquid-glass.cv-page-2 .entry,
                .template-liquid-glass.cv-page-2 .project-card,
                .template-liquid-glass.cv-page-2 .qr-card {
                    box-shadow:
                        inset 0 1px 0 rgba(255, 255, 255, 0.90),
                        inset 0 -14px 24px rgba(${accentRgb}, 0.11),
                        0 12px 28px rgba(15, 23, 42, 0.11) !important;
                }
                .template-liquid-glass .title-pill {
                    background:
                        linear-gradient(135deg, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 0.34)),
                        rgba(${accentRgb}, 0.10) !important;
                    border-color: rgba(185, 199, 218, 0.72) !important;
                    box-shadow:
                        inset 0 1px 0 rgba(255, 255, 255, 0.88),
                        0 8px 18px rgba(15, 23, 42, 0.09) !important;
                    backdrop-filter: none !important;
                    -webkit-backdrop-filter: none !important;
                }
                .template-liquid-glass .meter-dot,
                .template-liquid-glass .meter-star,
                .template-liquid-glass .meter-dot.active,
                .template-liquid-glass .meter-star.active {
                    box-shadow: none !important;
                    filter: none !important;
                }
                .template-liquid-glass .meter-dot.active,
                .template-liquid-glass .meter-star.active {
                    background: var(--cv-accent) !important;
                    border-color: var(--cv-accent) !important;
                }
        ` : '';
        const editorPrintLock = [
            freezeComputed('.cv', samplePage, ['padding', 'gap', 'font-size', 'line-height']),
            freezeComputed('.cv-header', samplePage?.querySelector('.cv-header'), ['gap', 'padding', 'border-radius']),
            freezeComputed('.cv-grid', samplePage?.querySelector('.cv-grid'), ['gap', 'grid-template-columns']),
            freezeComputed('.cv-main', samplePage?.querySelector('.cv-main'), ['gap']),
            freezeComputed('.cv-side', samplePage?.querySelector('.cv-side'), ['gap']),
            freezeComputed('#cv-name', samplePage?.querySelector('#cv-name'), ['font-size', 'line-height', 'letter-spacing']),
            freezeComputed('.page-title', samplePage?.querySelector('.page-title'), ['font-size', 'line-height', 'letter-spacing']),
            freezeComputed('.cv-section h3', samplePage?.querySelector('.cv-section h3'), ['font-size', 'line-height', 'letter-spacing', 'margin-bottom']),
            freezeComputed('.cv-tagline, .page-subtitle, .entry-description, .editable-block', samplePage?.querySelector('.cv-tagline, .page-subtitle, .entry-description, .editable-block'), ['font-size', 'line-height']),
            freezeComputed('.entry-title, .project-title, .skill-name', samplePage?.querySelector('.entry-title, .project-title, .skill-name'), ['font-size', 'line-height']),
            freezeComputed('.entry-meta, .project-link', samplePage?.querySelector('.entry-meta, .project-link'), ['font-size', 'line-height']),
            freezeComputed('.entry', samplePage?.querySelector('.entry'), ['padding', 'gap', 'border-radius', 'margin-bottom']),
            freezeComputed('.project-card', samplePage?.querySelector('.project-card'), ['padding', 'gap', 'border-radius', 'margin-bottom', 'grid-template-columns']),
            freezeComputed('.tool-chip, .social-link, .contact-item', samplePage?.querySelector('.tool-chip, .social-link, .contact-item'), ['padding', 'gap', 'border-radius']),
            freezeComputed('.profile-photo', samplePage?.querySelector('.profile-photo'), ['width', 'height', 'margin-top', 'border-radius'])
        ].filter(Boolean).join('\n');
        styleEl.innerHTML = `
            @page { margin: 0; size: ${pageSize}; }
            @media print {
                *,
                *::before,
                *::after {
                    print-color-adjust: exact !important;
                    -webkit-print-color-adjust: exact !important;
                }
                html,
                body {
                    width: ${cvW} !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    background: white !important;
                    overflow: visible !important;
                }
                .no-print,
                .box-resize-handle,
                .box-drag-handle,
                .box-delete-btn,
                .page-breaker-line {
                    display: none !important;
                }
                .app-container {
                    display: block !important;
                    width: ${cvW} !important;
                    min-height: 0 !important;
                    height: auto !important;
                    overflow: visible !important;
                    background: white !important;
                }
                .app-workspace,
                .canvas-area,
                .cv-wrapper,
                .cv-pages {
                    display: block !important;
                    width: ${cvW} !important;
                    min-height: 0 !important;
                    height: auto !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    overflow: visible !important;
                    background: transparent !important;
                }
                .cv-wrapper {
                    transform: none !important;
                    transform-origin: top left !important;
                }
                .cv-pages {
                    gap: 0 !important;
                    align-items: stretch !important;
                    --page-gap: 0px !important;
                }
                .cv-pages.has-page-2 > .cv:first-of-type:not(.is-hidden) {
                    margin-bottom: 0 !important;
                }
                .cv {
                    box-sizing: border-box !important;
                    box-shadow: none !important;
                    width: ${cvW} !important;
                    min-width: ${cvW} !important;
                    max-width: ${cvW} !important;
                    height: ${cvH} !important;
                    min-height: ${cvH} !important;
                    max-height: ${cvH} !important;
                    margin: 0 !important;
                    break-inside: avoid !important;
                    page-break-inside: avoid !important;
                    break-after: page !important;
                    page-break-after: always !important;
                    overflow: visible !important;
                    clip-path: inset(0 -14mm 0 0) !important;
                    animation: none !important;
                }
                .cv-header,
                .cv-grid,
                .cv-main,
                .cv-side,
                .cv-section {
                    overflow: visible !important;
                }
                .cv:last-child {
                    break-after: auto !important;
                    page-break-after: auto !important;
                }
                .cv-page-2.is-hidden {
                    display: none !important;
                }
                .cv-bg-shape,
                .cv-bg-shape-alt,
                .cv::before,
                .cv::after {
                    display: block !important;
                }
                ${editorPrintLock}
                ${liquidGlassPrintLock}
            }
        `;

        const previousTitle = document.title;
        let exportCleaned = false;
        const cleanupPrintStyle = () => {
            if (exportCleaned) return;
            exportCleaned = true;
            document.title = previousTitle;
            exportPdfBtn.textContent = originalLabel;
            exportPdfBtn.disabled = false;
            pdfAssets.restore();
            styleEl.remove();
            window.removeEventListener('afterprint', cleanupPrintStyle);
        };
        window.addEventListener('afterprint', cleanupPrintStyle);
        document.title = `${safeName}_CV.pdf`;
        setTimeout(() => {
            window.print();
            setTimeout(() => {
                if (document.getElementById(styleId)) {
                    cleanupPrintStyle();
                }
            }, 1200);
        }, 60);
    });

    exportPngBtn.addEventListener('click', async () => {
        exportPngBtn.textContent = 'Skapar PNG...';
        exportPngBtn.disabled = true;

        try {
            const canvas = await html2canvas(cvPages, {
                scale: 3,
                useCORS: true,
                allowTaint: true,
                backgroundColor: null,
                logging: false,
                onclone: (clonedDoc) => {
                    makePngExportCloneSafe(clonedDoc);
                    clonedDoc.querySelectorAll('.box-resize-handle, .box-drag-handle, .box-delete-btn, .page-breaker-line')
                        .forEach((el) => el.remove());
                    clonedDoc.querySelectorAll('img').forEach((img) => {
                        if (img.src && img.src.startsWith('http')) img.remove();
                    });
                }
            });
            const link = document.createElement('a');
            const safeName = (state.profile.name || 'CV').trim().replace(/\s+/g, '_');
            link.download = `${safeName}_CV.png`;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            console.error('PNG export failed', err);
            alert('Kunde inte skapa PNG.');
        } finally {
            exportPngBtn.textContent = 'Exportera PNG';
            exportPngBtn.disabled = false;
        }
    });

    // Project save/load functionality
    // Removed custom project functions - using existing JSON design save/load

    if (saveDesignBtn) saveDesignBtn.addEventListener('click', saveDesign);
    if (loadDesignBtn) loadDesignBtn.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = loadDesign;
        input.click();
    });

    window.addEventListener('resize', autoFitZoom);

    // ═══ PANEL TABS ═══
    function switchToPanel(panelId) {
        document.querySelectorAll('.panel-pane').forEach(p => {
            p.style.display = 'none';
            p.classList.remove('is-active');
        });
        document.querySelectorAll('.panel-tab-btn').forEach(b => b.classList.remove('is-active'));
        const pane = document.getElementById('panel-' + panelId);
        if (pane) { pane.style.display = 'flex'; pane.classList.add('is-active'); }
        const tab = document.querySelector(`.panel-tab-btn[data-panel="${panelId}"]`);
        if (tab) tab.classList.add('is-active');
    }

    document.querySelectorAll('.panel-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchToPanel(btn.dataset.panel));
    });

    const panelsDock = document.getElementById('panels-dock');
    if (panelsDock) {
        panelsDock.addEventListener('input', (event) => {
            if (event.target.matches('textarea')) autoSizeTextarea(event.target);
        });
    }

    // ═══ PALETTE SWATCHES ═══
    function syncPaletteSwatches(palValue) {
        document.querySelectorAll('.pal-swatch[data-palette]').forEach(b => {
            b.classList.toggle('is-active', b.dataset.palette === palValue);
        });
    }

    document.querySelectorAll('.pal-swatch[data-palette]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pal = btn.dataset.palette;
            if (paletteSelect) paletteSelect.value = pal;
            applyPalette(pal);
            syncPaletteSwatches(pal);
        });
    });

    // ═══ STATUS BAR ═══
    const statusSelInfo = document.getElementById('status-selection-info');
    const statusZoomInfo = document.getElementById('status-zoom-info');

    function updateStatusBar(selectionLabel) {
        if (statusSelInfo) statusSelInfo.textContent = selectionLabel || 'Klicka på ett element i canvas';
        if (statusZoomInfo) statusZoomInfo.textContent = `Zoom: ${Math.round((currentZoom || 1) * 100)}%`;
    }

    // ═══ CONTEXT PANEL ═══
    function detectBoxContext(box) {
        if (!box) return null;
        if (box.dataset.section === 'socials') return { type: 'socials', field: box.dataset.field };
        if (box.classList.contains('profile-photo')) return { type: 'profile-photo' };
        if (box.classList.contains('qr-card')) return { type: 'qr' };
        if (box.classList.contains('contact-item')) return { type: 'contact' };
        if (box.id === 'cv-name' || box.id === 'cv-title' || box.id === 'cv-tagline') return { type: 'profile' };
        const editable = box.querySelector('[data-section]');
        if (!editable) return { type: 'generic' };
        const section = editable.dataset.section;
        const index = editable.dataset.index !== undefined ? Number(editable.dataset.index) : null;
        return { type: section, index };
    }

    function renderCtxEntry(section, index, item, title, fields) {
        const fh = fields.map(f => {
            const val = escapeHtml(item[f.field] || '');
            if (f.type === 'textarea') return `<label class="ctx-label">${f.label}</label><textarea class="ctx-input" data-ctx-section="${section}" data-ctx-index="${index}" data-ctx-field="${f.field}">${val}</textarea>`;
            return `<label class="ctx-label">${f.label}</label><input type="text" class="ctx-input" data-ctx-section="${section}" data-ctx-index="${index}" data-ctx-field="${f.field}" value="${val}">`;
        }).join('');
        return `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">${title}</span><button class="ctx-del-btn" data-ctx-action="delete" data-ctx-section="${section}" data-ctx-index="${index}">Ta bort</button></div><div class="ctx-fields">${fh}</div></div>`;
    }

    function renderContextPanel(box) {
        const ctxEditor = document.getElementById('context-editor');
        const boxStyleSection = document.getElementById('box-style-section');
        const noSelMsg = document.getElementById('panel-no-selection');
        if (!ctxEditor) return;

        if (!box) {
            ctxEditor.style.display = 'none';
            ctxEditor.innerHTML = '';
            if (boxStyleSection) boxStyleSection.style.display = 'none';
            if (noSelMsg) noSelMsg.style.display = 'flex';
            updateStatusBar(null);
            return;
        }

        if (noSelMsg) noSelMsg.style.display = 'none';
        ctxEditor.style.display = 'flex';
        if (boxStyleSection) boxStyleSection.style.display = 'block';

        const ctx = detectBoxContext(box);
        let html = '', label = 'Element';

        if (ctx && ctx.type === 'experience' && ctx.index !== null) {
            const item = state.experience[ctx.index] || {};
            label = 'Erfarenhet';
            html = renderCtxEntry('experience', ctx.index, item, '💼 Erfarenhet', [
                { field: 'role', label: 'Roll', type: 'text' },
                { field: 'company', label: 'Företag', type: 'text' },
                { field: 'period', label: 'Period', type: 'text' },
                { field: 'description', label: 'Beskrivning', type: 'textarea' }
            ]);
        } else if (ctx && ctx.type === 'education' && ctx.index !== null) {
            const item = state.education[ctx.index] || {};
            label = 'Utbildning';
            html = renderCtxEntry('education', ctx.index, item, '🎓 Utbildning', [
                { field: 'program', label: 'Program', type: 'text' },
                { field: 'school', label: 'Skola', type: 'text' },
                { field: 'period', label: 'Period', type: 'text' },
                { field: 'description', label: 'Beskrivning', type: 'textarea' }
            ]);
        } else if (ctx && ctx.type === 'certs' && ctx.index !== null) {
            const item = state.certs[ctx.index] || {};
            label = 'Certifikat';
            html = renderCtxEntry('certs', ctx.index, item, '🏆 Certifikat', [
                { field: 'name', label: 'Namn', type: 'text' },
                { field: 'issuer', label: 'Utfärdare', type: 'text' },
                { field: 'year', label: 'År', type: 'text' },
                { field: 'link', label: 'Länk', type: 'text' }
            ]);
        } else if (ctx && ctx.type === 'projects' && ctx.index !== null) {
            const item = state.projects[ctx.index] || {};
            label = 'Projekt';
            html = renderCtxEntry('projects', ctx.index, item, '📁 Projekt', [
                { field: 'title', label: 'Titel', type: 'text' },
                { field: 'role', label: 'Roll', type: 'text' },
                { field: 'description', label: 'Beskrivning', type: 'textarea' },
                { field: 'link', label: 'Länk', type: 'text' },
                { field: 'video', label: 'Video / Reel', type: 'text' }
            ]);
        } else if (ctx && ctx.type === 'skills' && ctx.index !== null) {
            const item = state.skills[ctx.index] || {};
            label = 'Färdighet';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">⭐ Färdighet</span><button class="ctx-del-btn" data-ctx-action="delete" data-ctx-section="skills" data-ctx-index="${ctx.index}">Ta bort</button></div><div class="ctx-fields"><label class="ctx-label">Namn</label><input type="text" class="ctx-input" data-ctx-section="skills" data-ctx-index="${ctx.index}" data-ctx-field="name" value="${escapeHtml(item.name || '')}"><label class="ctx-label">Nivå (0–100)</label><input type="range" class="ctx-input" data-ctx-section="skills" data-ctx-index="${ctx.index}" data-ctx-field="level" min="0" max="100" value="${Number(item.level) || 0}"></div></div>`;
        } else if (ctx && ctx.type === 'tools' && ctx.index !== null) {
            const item = state.tools[ctx.index] || {};
            label = 'Verktyg';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">🔧 Verktyg</span><button class="ctx-del-btn" data-ctx-action="delete" data-ctx-section="tools" data-ctx-index="${ctx.index}">Ta bort</button></div><div class="ctx-fields"><label class="ctx-label">Namn</label><input type="text" class="ctx-input" data-ctx-section="tools" data-ctx-index="${ctx.index}" data-ctx-field="name" value="${escapeHtml(item.name || '')}"></div></div>`;
        } else if (ctx && ctx.type === 'profile') {
            label = 'Profil';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">👤 Profil</span></div><div class="ctx-fields"><label class="ctx-label">Namn</label><input type="text" class="ctx-input" data-ctx-profile="name" value="${escapeHtml(state.profile.name || '')}"><label class="ctx-label">Titel</label><input type="text" class="ctx-input" data-ctx-profile="title" value="${escapeHtml(state.profile.title || '')}"><label class="ctx-label">Tagline</label><textarea class="ctx-input" data-ctx-profile="tagline">${escapeHtml(state.profile.tagline || '')}</textarea></div></div>`;
        } else if (ctx && ctx.type === 'profile-photo') {
            label = 'Profilbild';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">🖼 Profilbild</span></div><div class="ctx-fields"><button class="ctx-action-btn" id="ctx-upload-photo">Ladda upp bild</button><button class="ctx-action-btn ctx-danger-btn" id="ctx-remove-photo">Ta bort bild</button><label class="ctx-label">Bildform</label><select class="ctx-input" data-ctx-profile-shape="true"><option value="rounded" ${state.profileShape==='rounded'?'selected':''}>Rundad</option><option value="square" ${state.profileShape==='square'?'selected':''}>Fyrkant</option><option value="circle" ${state.profileShape==='circle'?'selected':''}>Cirkel</option><option value="rect" ${state.profileShape==='rect'?'selected':''}>Rektangel</option></select></div></div>`;
        } else if (ctx && ctx.type === 'socials') {
            const labels = { linkedin: 'Rad 1', behance: 'Rad 2', instagram: 'Rad 3', tiktok: 'Rad 4', youtube: 'Rad 5', vimeo: 'Rad 6' };
            const iconOptions = ['linkedin', 'behance', 'instagram', 'tiktok', 'youtube', 'vimeo', 'web']
                .map((key) => `<option value="${key}" ${getSocialIconKey(ctx.field) === key ? 'selected' : ''}>${key}</option>`)
                .join('');
            label = labels[ctx.field] || 'Social';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">🔗 ${label}</span></div><div class="ctx-fields"><label class="ctx-label">Ikon</label><select class="ctx-input" data-ctx-social-icon="${ctx.field}">${iconOptions}</select><label class="ctx-label">Text / länk</label><input type="text" class="ctx-input" data-ctx-social="${ctx.field}" value="${escapeHtml(state.socials[ctx.field] || '')}"></div></div>`;
        } else if (ctx && ctx.type === 'qr') {
            label = 'QR-kod';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">◻ QR-kod</span></div><div class="ctx-fields"><label class="ctx-label">Portfolio URL</label><input type="text" class="ctx-input" data-ctx-profile="portfolio" value="${escapeHtml(state.profile.portfolio || '')}"><label class="ctx-label">Storlek (px)</label><div style="display:flex;gap:8px;align-items:center"><input type="range" class="ctx-input" id="ctx-qr-size" min="40" max="300" step="8" value="${state.qrSize || 120}" style="flex:1"><span id="ctx-qr-size-lbl" style="min-width:34px;font-size:0.75rem;color:var(--ui-muted,#888)">${state.qrSize || 120}px</span></div><button class="ctx-action-btn" id="ctx-gen-qr">Generera QR-kod</button></div></div>`;
        } else if (ctx && ctx.type === 'contact') {
            label = 'Kontakt';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">📋 Kontakt</span></div><div class="ctx-fields"><label class="ctx-label">Etikett 1</label><input type="text" class="ctx-input" data-ctx-contact-label="email" value="${escapeHtml(state.contactLabels.email || '')}"><label class="ctx-label">Värde 1</label><input type="text" class="ctx-input" data-ctx-profile="email" value="${escapeHtml(state.profile.email || '')}"><label class="ctx-label">Etikett 2</label><input type="text" class="ctx-input" data-ctx-contact-label="phone" value="${escapeHtml(state.contactLabels.phone || '')}"><label class="ctx-label">Värde 2</label><input type="text" class="ctx-input" data-ctx-profile="phone" value="${escapeHtml(state.profile.phone || '')}"><label class="ctx-label">Etikett 3</label><input type="text" class="ctx-input" data-ctx-contact-label="location" value="${escapeHtml(state.contactLabels.location || '')}"><label class="ctx-label">Värde 3</label><input type="text" class="ctx-input" data-ctx-profile="location" value="${escapeHtml(state.profile.location || '')}"><label class="ctx-label">Etikett 4</label><input type="text" class="ctx-input" data-ctx-contact-label="website" value="${escapeHtml(state.contactLabels.website || '')}"><label class="ctx-label">Värde 4</label><input type="text" class="ctx-input" data-ctx-profile="website" value="${escapeHtml(state.profile.website || '')}"></div></div>`;
        } else {
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">Element</span></div><div class="ctx-fields"><p style="font-size:0.75rem;color:var(--ui-muted,#888)">Justera box-stilen nedan.</p></div></div>`;
        }

        ctxEditor.innerHTML = html;
        autoSizePanelTextareas(ctxEditor);
        bindContextPanelEvents();
        updateStatusBar(label + ' markerat');
        switchToPanel('properties');
    }

    function bindContextPanelEvents() {
        const ctxEditor = document.getElementById('context-editor');
        if (!ctxEditor) return;
        ctxEditor.removeEventListener('input', handleContextInput);
        ctxEditor.removeEventListener('change', handleContextChange);
        ctxEditor.removeEventListener('click', handleContextClick);
        ctxEditor.addEventListener('input', handleContextInput);
        ctxEditor.addEventListener('change', handleContextChange);
        ctxEditor.addEventListener('click', handleContextClick);
    }

    function handleContextInput(event) {
        const t = event.target;
        if (t.id === 'ctx-qr-size') {
            const size = Math.max(40, Math.min(300, Number(t.value)));
            state.qrSize = size;
            const lbl = document.getElementById('ctx-qr-size-lbl');
            if (lbl) lbl.textContent = `${size}px`;
            applyQrSize();
        }
        if (t.dataset.ctxSection) {
            const section = t.dataset.ctxSection;
            const index = Number(t.dataset.ctxIndex);
            const field = t.dataset.ctxField;
            const map = { experience: state.experience, education: state.education, certs: state.certs, projects: state.projects, skills: state.skills, tools: state.tools };
            const arr = map[section];
            if (arr && arr[index] !== undefined) {
                arr[index][field] = t.value;
                const renders = { experience: renderExperience, education: renderEducation, certs: renderCerts, projects: renderProjects, skills: renderSkills, tools: renderTools };
                if (renders[section]) renders[section]();
            }
        }
        if (t.dataset.ctxProfile) {
            const field = t.dataset.ctxProfile;
            state.profile[field] = t.value;
            const inputMap = { name: nameInput, title: titleInput, tagline: taglineInput, email: emailInput, phone: phoneInput, location: locationInput, website: websiteInput, portfolio: portfolioInput };
            if (inputMap[field]) inputMap[field].value = t.value;
            if (field === 'portfolio') {
                renderQr();
            } else if (['email', 'phone', 'location', 'website'].includes(field)) {
                updateContact();
            } else {
                updateProfilePreview();
            }
        }
        if (t.dataset.ctxContactLabel) {
            const field = t.dataset.ctxContactLabel;
            state.contactLabels[field] = t.value;
            const input = contactLabelInputs?.[field];
            if (input) input.value = t.value;
            updateContact();
        }
        if (t.dataset.ctxSocial) {
            const field = t.dataset.ctxSocial;
            state.socials[field] = t.value;
            const inputMap = { linkedin: linkedinInput, behance: behanceInput, instagram: instagramInput, tiktok: tiktokInput, youtube: youtubeInput, vimeo: vimeoInput };
            if (inputMap[field]) inputMap[field].value = t.value;
            renderSocials();
        }
        if (t.dataset.ctxSocialIcon) {
            const field = t.dataset.ctxSocialIcon;
            state.socialIcons[field] = t.value;
            const select = document.querySelector(`[data-social-icon="${field}"]`);
            if (select) select.value = t.value;
            renderSocials();
        }
    }

    function handleContextChange(event) {
        const t = event.target;
        if (t.dataset.ctxSocialIcon) {
            const field = t.dataset.ctxSocialIcon;
            state.socialIcons[field] = t.value;
            const select = document.querySelector(`[data-social-icon="${field}"]`);
            if (select) select.value = t.value;
            renderSocials();
        }
        if (t.dataset.ctxProfileShape) {
            state.profileShape = t.value;
            if (profileShapeSelect) profileShapeSelect.value = t.value;
            updateProfilePreview();
        }
        if (t.dataset.ctxSection === 'skills' && t.dataset.ctxField === 'level') {
            const index = Number(t.dataset.ctxIndex);
            const level = Math.max(0, Math.min(100, Number(t.value)));
            state.skills[index].level = level;
            renderSkills();
            syncSkillLevelInput(index, level);
        }
    }

    function handleContextClick(event) {
        const delBtn = event.target.closest('[data-ctx-action="delete"]');
        if (delBtn) {
            const section = delBtn.dataset.ctxSection;
            const index = Number(delBtn.dataset.ctxIndex);
            const map = { experience: state.experience, education: state.education, certs: state.certs, projects: state.projects, skills: state.skills, tools: state.tools };
            const arr = map[section];
            if (arr) {
                arr.splice(index, 1);
                renderEditors();
                const renders = { experience: renderExperience, education: renderEducation, certs: renderCerts, projects: renderProjects, skills: renderSkills, tools: renderTools };
                if (renders[section]) renders[section]();
            }
            setActiveBox(null);
            return;
        }
        if (event.target.id === 'ctx-upload-photo') { profileImageInput.click(); return; }
        if (event.target.id === 'ctx-remove-photo') { state.profileImage = ''; updateProfilePreview(); return; }
        if (event.target.id === 'ctx-gen-qr') { generateQr(); return; }
    }

    // Hook context panel into setActiveBox
    const _origSetActiveBox = setActiveBox;
    setActiveBox = (box) => {
        _origSetActiveBox(box);
        renderContextPanel(box);
    };

    function init() {
        syncInputs();
        const activeTemplate = document.querySelector('#template-grid [data-template].is-active')?.dataset.template;
        if (activeTemplate) applyTemplateDefaults(activeTemplate);
        if (paletteSelect) syncPaletteSwatches(paletteSelect.value);
        renderEditors();
        renderAll();
        ensurePage2SectionIds();
        ensureFreeLayers();
        ensurePageBreaker();
        autoFitZoom();
        generateQr();
        refreshDraggableBoxes();
        switchToPanel('properties');
        updateStatusBar(null);
    }

    bindEditorEvents();
    init();
});
