document.addEventListener('DOMContentLoaded', () => {
    const cv = document.getElementById('cv');
    const cvPages = document.getElementById('cv-pages');
    const cvWrapper = document.querySelector('.cv-wrapper');

    const formatSelect = document.getElementById('format-select');
    const layoutSelect = document.getElementById('layout-select');
    const paletteSelect = document.getElementById('palette-select');
    const fontSelect = document.getElementById('font-select');
    const backgroundSelect = document.getElementById('background-select');
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
    const boxBorderColor = document.getElementById('box-border-color');
    const clearBoxStyleBtn = document.getElementById('clear-box-style-btn');
    const templateGrid = document.getElementById('template-grid');

    const nameInput = document.getElementById('name-input');
    const titleInput = document.getElementById('title-input');
    const emailInput = document.getElementById('email-input');
    const phoneInput = document.getElementById('phone-input');
    const locationInput = document.getElementById('location-input');
    const websiteInput = document.getElementById('website-input');
    const taglineInput = document.getElementById('tagline-input');
    const portfolioInput = document.getElementById('portfolio-input');
    const generateQrBtn = document.getElementById('generate-qr-btn');

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
    let currentZoom = 0.7;
    const ZOOM_STEP = 0.05;
    const PAGE_GAP = 40;
    const GRID_SIZE = 8;

    let activeBox = null;
    let isDraggingBox = false;
    let isResizingBox = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let boxStartX = 0;
    let boxStartY = 0;
    let boxStartScale = 1;
    let refreshQueued = false;

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
        qrDataUrl: ''
    };

    const templateDefaults = {
        'template-minimal': {
            palette: 'palette-slate',
            font: 'font-sora',
            background: 'bg-clean',
            section: 'section-cards',
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
            palette: 'palette-studio',
            font: 'font-grotesk',
            background: 'bg-studio',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#ff6b3d'
        },
        'template-editorial': {
            palette: 'palette-sand',
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
        'template-retro': {
            palette: 'palette-sand',
            font: 'font-grotesk',
            background: 'bg-clean',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#ff8c42'
        },
        'template-corporate': {
            palette: 'palette-studio',
            font: 'font-plex',
            background: 'bg-clean',
            section: 'section-lines',
            layout: 'layout-two',
            skillStyle: 'skills-style-bars',
            accent: '#1e3a5f'
        },
        'template-agency': {
            palette: 'palette-ember',
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

    function updateContact() {
        const items = [];
        if (state.profile.email) {
            items.push(`<a class="contact-item" href="mailto:${escapeHtml(state.profile.email)}"><span>E-post</span><span class="editable" contenteditable="true" data-section="profile" data-field="email">${escapeHtml(state.profile.email)}</span></a>`);
        }
        if (state.profile.phone) {
            items.push(`<div class="contact-item"><span>Telefon</span><span class="editable" contenteditable="true" data-section="profile" data-field="phone">${escapeHtml(state.profile.phone)}</span></div>`);
        }
        if (state.profile.location) {
            items.push(`<div class="contact-item"><span>Plats</span><span class="editable" contenteditable="true" data-section="profile" data-field="location">${escapeHtml(state.profile.location)}</span></div>`);
        }
        if (state.profile.website) {
            const url = normalizeUrl(state.profile.website);
            items.push(`<a class="contact-item" href="${escapeHtml(url)}" target="_blank" rel="noopener"><span>Webb</span><span class="editable" contenteditable="true" data-section="profile" data-field="website">${escapeHtml(state.profile.website)}</span></a>`);
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

    function scheduleBoxRefresh() {
        if (refreshQueued) return;
        refreshQueued = true;
        requestAnimationFrame(() => {
            refreshQueued = false;
            refreshDraggableBoxes();
        });
    }

    function refreshDraggableBoxes() {
        const selectors = [
            '.entry',
            '.project-card',
            '.skill-item',
            '.tool-chip',
            '.social-link',
            '.qr-card',
            '.contact-item',
            '.editable-block',
            '.profile-photo',
            '.title-pill'
        ];
        const boxes = cvPages.querySelectorAll(selectors.join(','));
        boxes.forEach((box) => {
            box.classList.add('draggable-box');
            if (!box.style.getPropertyValue('--box-x')) box.style.setProperty('--box-x', '0px');
            if (!box.style.getPropertyValue('--box-y')) box.style.setProperty('--box-y', '0px');
            if (!box.style.getPropertyValue('--box-scale')) box.style.setProperty('--box-scale', '1');
            if (!box.querySelector('.box-resize-handle')) {
                const handle = document.createElement('div');
                handle.className = 'box-resize-handle';
                box.appendChild(handle);
            }
        });
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
            { key: 'linkedin', label: 'LinkedIn', icon: 'Li' },
            { key: 'behance', label: 'Behance', icon: 'Be' },
            { key: 'instagram', label: 'Instagram', icon: 'Ig' },
            { key: 'tiktok', label: 'TikTok', icon: 'Tk' },
            { key: 'youtube', label: 'YouTube', icon: 'Yt' },
            { key: 'vimeo', label: 'Vimeo', icon: 'Vm' }
        ];
        const html = entries
            .filter((entry) => state.socials[entry.key])
            .map((entry) => {
                const raw = state.socials[entry.key];
                const url = normalizeSocialUrl(entry.key, raw);
                return `<a class="social-link editable" contenteditable="true" data-section="socials" data-field="${entry.key}" data-icon="${entry.icon}" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(raw)}</a>`;
            })
            .join('');
        cvSocialsList.innerHTML = html;
        updateSectionVisibility(sectionSocials, entries.filter((entry) => state.socials[entry.key]));
        scheduleBoxRefresh();
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
        const rawValue = target.textContent.trim();

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
            if (anchor) anchor.href = normalizeSocialUrl(field, rawValue);
        }
    }

    function handleEditableBlur(target) {
        if (target.dataset.section === 'profile' && target.dataset.field === 'portfolio') {
            generateQr();
        }
    }

    async function generateQr() {
        const url = state.profile.portfolio;
        if (!url) {
            state.qrDataUrl = '';
            renderQr();
            return;
        }
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(url)}`;
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

    function renderEditors() {
        renderExperienceEditor();
        renderProjectEditor();
        renderEducationEditor();
        renderSkillsEditor();
        renderToolsEditor();
        renderCertsEditor();
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
        const padding = 60;
        const assumedHeight = formatSelect.value === 'a3' ? 1587 : 1122;
        const pageCount = page2 && !page2.classList.contains('is-hidden') ? 2 : 1;
        const totalHeight = assumedHeight * pageCount + PAGE_GAP * (pageCount - 1);
        const scaleHeight = (previewArea.clientHeight - padding) / totalHeight;
        currentZoom = Math.min(Math.max(scaleHeight, 0.2), 1.1);
        updateZoom();
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

        applyCvClass(defaults.layout || 'layout-two', 'layout-');
        applyCvClass(defaults.palette || 'palette-slate', 'palette-');
        applyCvClass(defaults.font || 'font-sora', 'font-');
        applyCvClass(defaults.background || 'bg-clean', 'bg-');
        applyCvClass(defaults.section || 'section-cards', 'section-');
        applyCvClass(defaults.skillStyle || 'skills-style-bars', 'skills-style-');

        // Sync color pickers from palette; clear any inline overrides so palette class takes effect
        clearInlineColorVars();
        syncColorPickersFromPalette(defaults.palette || 'palette-slate');
        if (accentColorInput) accentColorInput.value = defaults.accent || '#ff6b3d';
    }

    function resetColors() {
        clearInlineColorVars();
        if (paletteSelect) {
            paletteSelect.selectedIndex = 0;
            applyCvClass(paletteSelect.value, 'palette-');
            syncColorPickersFromPalette(paletteSelect.value);
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

    function collectPage2Content() {
        if (!page2) return null;
        const pageTitle = page2.querySelector('.page-title');
        const pageSubtitle = page2.querySelector('.page-subtitle');
        const sections = Array.from(page2.querySelectorAll('.cv-section')).map(section => {
            const h3 = section.querySelector('h3');
            const block = section.querySelector('.editable-block');
            return {
                title: h3 ? h3.textContent : '',
                content: block ? block.textContent : ''
            };
        });
        return {
            pageTitle: pageTitle ? pageTitle.textContent : '',
            pageSubtitle: pageSubtitle ? pageSubtitle.textContent : '',
            sections
        };
    }

    function restorePage2Content(content) {
        if (!page2 || !content) return;
        const pageTitle = page2.querySelector('.page-title');
        const pageSubtitle = page2.querySelector('.page-subtitle');
        if (pageTitle && content.pageTitle !== undefined) pageTitle.textContent = content.pageTitle;
        if (pageSubtitle && content.pageSubtitle !== undefined) pageSubtitle.textContent = content.pageSubtitle;
        if (content.sections) {
            const sections = page2.querySelectorAll('.cv-section');
            content.sections.forEach((sData, idx) => {
                if (!sections[idx]) return;
                const h3 = sections[idx].querySelector('h3');
                const block = sections[idx].querySelector('.editable-block');
                if (h3 && sData.title !== undefined) h3.textContent = sData.title;
                if (block && sData.content !== undefined) block.textContent = sData.content;
            });
        }
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
        if (project.page2 && page2) {
            if (project.page2.visible) {
                page2.classList.remove('is-hidden');
                if (togglePage2Btn) togglePage2Btn.textContent = 'Ta bort sida 2';
            } else {
                page2.classList.add('is-hidden');
                if (togglePage2Btn) togglePage2Btn.textContent = 'Lägg till sida 2';
            }
            if (project.page2.content) restorePage2Content(project.page2.content);
        }
        syncInputs();
        renderEditors();
        renderAll();
        autoFitZoom();
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
                experience: JSON.parse(JSON.stringify(state.experience)),
                projects: JSON.parse(JSON.stringify(state.projects)),
                education: JSON.parse(JSON.stringify(state.education)),
                skills: JSON.parse(JSON.stringify(state.skills)),
                tools: JSON.parse(JSON.stringify(state.tools)),
                certs: JSON.parse(JSON.stringify(state.certs)),
                profileImage: state.profileImage,
                profileShape: state.profileShape,
                profileSize: { ...state.profileSize },
                qrDataUrl: state.qrDataUrl
            },
            page2: {
                visible: page2 ? !page2.classList.contains('is-hidden') : false,
                content: collectPage2Content()
            }
        };
        const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${safeName}_CV_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
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

    // Box-specific color picker
    let activeBoxColorTarget = null;

    const updateBoxColor = () => {
        if (!activeBox) return;
        activeBox.style.backgroundColor = boxBgColor.value;
        activeBox.style.borderColor = boxBorderColor.value;
        activeBox.style.setProperty('--box-bg', boxBgColor.value);
        activeBox.style.setProperty('--box-border', boxBorderColor.value);
    };

    const updateActiveBoxColorPreview = () => {
        if (!activeBox) {
            boxBgColor.value = '#f6f7fb';
            boxBorderColor.value = '#0a0a0a';
            return;
        }
        const computedBg = getComputedStyle(activeBox).backgroundColor;
        const computedBorder = getComputedStyle(activeBox).borderColor;
        boxBgColor.value = rgbToHex(computedBg) || '#f6f7fb';
        boxBorderColor.value = rgbToHex(computedBorder) || '#0a0a0a';
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

    boxBgColor.addEventListener('input', updateBoxColor);
    boxBorderColor.addEventListener('input', updateBoxColor);
    clearBoxStyleBtn.addEventListener('click', () => {
        if (activeBox) {
            activeBox.style.backgroundColor = '';
            activeBox.style.borderColor = '';
            activeBox.style.removeProperty('--box-bg');
            activeBox.style.removeProperty('--box-border');
            updateActiveBoxColorPreview();
        }
    });

    // Update preview when box selected
    const originalSetActiveBox = setActiveBox;
    setActiveBox = (box) => {
        originalSetActiveBox(box);
        updateActiveBoxColorPreview();
    };

    function syncInputs() {
        setInputValue(nameInput, state.profile.name);
        setInputValue(titleInput, state.profile.title);
        setInputValue(emailInput, state.profile.email);
        setInputValue(phoneInput, state.profile.phone);
        setInputValue(locationInput, state.profile.location);
        setInputValue(websiteInput, state.profile.website);
        setInputValue(taglineInput, state.profile.tagline);
        setInputValue(portfolioInput, state.profile.portfolio);

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
        applyCvClass(paletteSelect.value, 'palette-');
        clearInlineColorVars();
        syncColorPickersFromPalette(paletteSelect.value);
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
            page.style.setProperty('--cv-accent', cvPrimaryColor.value);
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
        const editable = event.target.closest('[contenteditable="true"][data-section]');
        if (!editable) return;
        handleEditableInput(editable);
    });

    cvPages.addEventListener('click', (event) => {
        const editableLink = event.target.closest('a[contenteditable="true"]');
        if (editableLink) event.preventDefault();
    });

    cvPages.addEventListener('pointerdown', (event) => {
        const resizeHandle = event.target.closest('.box-resize-handle');
        const box = event.target.closest('.draggable-box');
        if (!box) return;

        if (!resizeHandle) {
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
        boxStartScale = parseFloat(box.style.getPropertyValue('--box-scale')) || 1;

        if (resizeHandle) {
            isResizingBox = true;
        } else {
            isDraggingBox = true;
        }
    });

    document.addEventListener('pointermove', (event) => {
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
            const rawScale = boxStartScale + dx * 0.005;
            const snappedScale = Math.round(rawScale / 0.05) * 0.05;
            const nextScale = Math.max(0.4, Math.min(3, snappedScale));
            activeBox.style.setProperty('--box-scale', nextScale);
        }
    });

    document.addEventListener('pointerup', () => {
        if (activeBox) activeBox.classList.remove('dragging');
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

    exportPdfBtn.addEventListener('click', () => {
        // Scroll to top for proper PDF positioning
        window.scrollTo(0, 0);
        
        const styleId = 'dynamic-print-style';
        let styleEl = document.getElementById(styleId);
        if (!styleEl) {
            styleEl = document.createElement('style');
            styleEl.id = styleId;
            document.head.appendChild(styleEl);
        }
        styleEl.innerHTML = `
            @page { 
                margin: 0mm !important; 
                size: ${formatSelect.value === 'a3' ? 'A3 portrait !important' : 'A4 portrait !important'}; 
                padding: 0 !important;
            }
            * { box-sizing: border-box !important; }
            html, body { 
                margin: 0 !important; 
                padding: 0 !important; 
                height: auto !important;
                width: 100% !important;
                overflow: visible !important;
            }
            .no-print { display: none !important; }
            .app-container, .preview-area { 
                display: block !important; 
                position: static !important; 
                padding: 0 !important;
                margin: 0 !important;
                height: auto !important;
                background: white !important;
            }
            .cv-wrapper { 
                transform: none !important; 
                position: static !important; 
                margin: 0 auto !important; 
                width: 100% !important;
            }
            .cv-pages { 
                gap: 0 !important; 
                align-items: center !important;
                justify-content: center !important;
            }
            .cv { 
                box-shadow: none !important; 
                margin: 0 !important; 
                padding: 24px !important;
                width: 100% !important;
                height: auto !important;
                min-height: 100vh !important;
                page-break-after: always !important;
                page-break-inside: avoid !important;
            }
            .cv:last-child { page-break-after: auto !important; }
            .cv-page-2.is-hidden { display: none !important; }
        `;

        const safeName = (state.profile.name || 'CV').trim().replace(/\s+/g, '_');
        document.title = `${safeName}_CV.pdf`;
        window.print();
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
            applyCvClass(pal, 'palette-');
            clearInlineColorVars();
            syncColorPickersFromPalette(pal);
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
            const labels = { linkedin: 'LinkedIn', behance: 'Behance', instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', vimeo: 'Vimeo' };
            label = labels[ctx.field] || 'Social';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">🔗 ${label}</span></div><div class="ctx-fields"><label class="ctx-label">${label}</label><input type="text" class="ctx-input" data-ctx-social="${ctx.field}" value="${escapeHtml(state.socials[ctx.field] || '')}"></div></div>`;
        } else if (ctx && ctx.type === 'qr') {
            label = 'QR-kod';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">◻ QR-kod</span></div><div class="ctx-fields"><label class="ctx-label">Portfolio URL</label><input type="text" class="ctx-input" data-ctx-profile="portfolio" value="${escapeHtml(state.profile.portfolio || '')}"><button class="ctx-action-btn" id="ctx-gen-qr">Generera QR-kod</button></div></div>`;
        } else if (ctx && ctx.type === 'contact') {
            label = 'Kontakt';
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">📋 Kontakt</span></div><div class="ctx-fields"><label class="ctx-label">E-post</label><input type="text" class="ctx-input" data-ctx-profile="email" value="${escapeHtml(state.profile.email || '')}"><label class="ctx-label">Telefon</label><input type="text" class="ctx-input" data-ctx-profile="phone" value="${escapeHtml(state.profile.phone || '')}"><label class="ctx-label">Plats</label><input type="text" class="ctx-input" data-ctx-profile="location" value="${escapeHtml(state.profile.location || '')}"><label class="ctx-label">Webbplats</label><input type="text" class="ctx-input" data-ctx-profile="website" value="${escapeHtml(state.profile.website || '')}"></div></div>`;
        } else {
            html = `<div class="panel-section"><div class="ctx-header"><span class="ctx-title">Element</span></div><div class="ctx-fields"><p style="font-size:0.75rem;color:var(--ui-muted,#888)">Justera box-stilen nedan.</p></div></div>`;
        }

        ctxEditor.innerHTML = html;
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
            if (field === 'portfolio') { renderQr(); } else { updateProfilePreview(); }
        }
        if (t.dataset.ctxSocial) {
            const field = t.dataset.ctxSocial;
            state.socials[field] = t.value;
            const inputMap = { linkedin: linkedinInput, behance: behanceInput, instagram: instagramInput, tiktok: tiktokInput, youtube: youtubeInput, vimeo: vimeoInput };
            if (inputMap[field]) inputMap[field].value = t.value;
            renderSocials();
        }
    }

    function handleContextChange(event) {
        const t = event.target;
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
        autoFitZoom();
        generateQr();
        refreshDraggableBoxes();
        switchToPanel('properties');
        updateStatusBar(null);
    }

    bindEditorEvents();
    init();
});
