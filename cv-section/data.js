// Shared CV helpers.
// Experience data lives in js/i18n.js (window.i18n.getExperience()) so it can
// be localized per UI language. This file only carries the language-independent
// bits the renderer still needs.

// Format "1y 8mo"
window.CV_DURATION = function (start, end) {
    const parse = (s) => {
        if (!s) return new Date();
        const [y, m] = s.split('-').map(Number);
        return new Date(y, (m || 1) - 1, 1);
    };
    const a = parse(start);
    const b = end ? parse(end) : new Date();
    let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
    if (months < 1) months = 1;
    const y = Math.floor(months / 12);
    const m = months % 12;
    if (y === 0) return `${m}mo`;
    if (m === 0) return `${y}y`;
    return `${y}y ${m}mo`;
};

// Skill-matrix rows (category → years) used in V3 density map.
window.CV_SKILL_MATRIX = {
    years: [2022, 2023, 2024, 2025, 2026],
    groups: [
        {
            label: 'Languages',
            rows: [
                { label: 'Python', values: [1, 2, 3, 3, 4] },
                { label: 'SQL', values: [0, 1, 2, 3, 3] },
                { label: 'JavaScript', values: [0, 1, 2, 3, 3] },
                { label: 'HTML / CSS', values: [1, 2, 3, 3, 4] },
            ],
        },
        {
            label: 'Web Development',
            rows: [
                { label: 'React.js', values: [0, 0, 1, 3, 3] },
                { label: 'Node.js', values: [0, 0, 1, 2, 3] },
                { label: 'MongoDB', values: [0, 0, 0, 2, 3] },
            ],
        },
        {
            label: 'AI / Data',
            rows: [
                { label: 'Machine Learning', values: [0, 0, 1, 2, 3] },
                { label: 'MySQL', values: [0, 0, 1, 2, 3] },
                { label: 'PowerBI', values: [0, 0, 0, 1, 2] },
            ],
        },
        {
            label: 'Tools',
            rows: [
                { label: 'Git / GitHub', values: [0, 1, 2, 3, 4] },
                { label: 'VS Code', values: [0, 1, 2, 3, 4] },
            ],
        },
    ],
};