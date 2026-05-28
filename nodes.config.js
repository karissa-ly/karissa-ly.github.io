window.nodesConfig = {
  nodes: [
    // Core — centre-right
    { id: 'k',          label: 'karissa',           r: 13, group: 'core',   cx: 0.68,  cy: 0.50, href: '#home',                    tooltip: 'home' },
    // Orange cluster — upper-left, tight
    { id: 'ux',         label: 'research',          r: 10, group: 'orange', cx: 0.55,  cy: 0.32, href: '#work',                    tooltip: 'see work' },
    { id: 'cultural',   label: 'cultural intel',    r: 7,  group: 'orange', cx: 0.50,  cy: 0.20, href: '#work',                    tooltip: 'see work' },
    { id: 'mixed',      label: 'mixed methods',     r: 6,  group: 'orange', cx: 0.60,  cy: 0.20, href: '#work',                    tooltip: 'see work' },
    { id: 'segm',       label: 'segmentation',      r: 9,  group: 'orange', cx: 0.50,  cy: 0.44, href: '#project-01',              tooltip: 'case study →' },
    // Lilac cluster — upper-right, tight
    { id: 'ai',         label: 'applied ai',        r: 10, group: 'lilac',  cx: 0.80,  cy: 0.28, href: '#work',                    tooltip: 'see work' },
    { id: 'strategy',   label: 'product mgmt',      r: 8,  group: 'lilac',  cx: 0.76,  cy: 0.18, href: '#work',                    tooltip: 'see work' },
    { id: 'ml',         label: 'ml workflows',      r: 6,  group: 'lilac',  cx: 0.84,  cy: 0.20, href: '#work',                    tooltip: 'see work' },
    { id: 'figma',      label: 'figma',             r: 4,  group: 'lilac',  cx: 0.90,  cy: 0.14, href: 'https://figma.com',        tooltip: 'figma.com ↗' },
    { id: 'claude',     label: 'claude',            r: 5,  group: 'lilac',  cx: 0.92,  cy: 0.24, href: 'https://claude.ai',        tooltip: 'claude.ai ↗' },
    { id: 'quiltai',    label: 'quilt.ai',          r: 8,  group: 'lilac',  cx: 0.675, cy: 0.30, href: 'https://quilt.ai',         tooltip: 'quilt.ai ↗' },
    { id: 'lovable',    label: 'lovable',           r: 4,  group: 'lilac',  cx: 0.92,  cy: 0.42, href: 'https://lovable.dev',      tooltip: 'lovable.dev ↗' },
    // Blue cluster — lower-right, tight
    { id: 'dataviz',    label: 'data viz',          r: 8,  group: 'blue',   cx: 0.84,  cy: 0.72, href: '#project-03',              tooltip: 'case study →' },
    { id: 'observable', label: 'observable/js',     r: 5,  group: 'blue',   cx: 0.88,  cy: 0.80, href: '#project-03',              tooltip: 'case study →' },
    { id: 'hf',         label: 'human factors',     r: 6,  group: 'pink',   cx: 0.68,  cy: 0.72, href: '#project-04',              tooltip: 'case study →' },
    { id: 'notebooklm', label: 'notebooklm',        r: 4,  group: 'lilac',  cx: 0.93,  cy: 0.50, href: 'https://notebooklm.google', tooltip: 'notebooklm ↗' },
    // Pink cluster — centre-right, tight
    { id: 'proddesign', label: 'product design',    r: 7,  group: 'pink',   cx: 0.78,  cy: 0.50, href: '#work',                    tooltip: 'see work' },
    { id: 'design',     label: 'ux design',         r: 7,  group: 'pink',   cx: 0.74,  cy: 0.60, href: '#work',                    tooltip: 'see work' },
    { id: 'usability',  label: 'usability testing', r: 6,  group: 'pink',   cx: 0.70,  cy: 0.68, href: '#work',                    tooltip: 'see work' },
    // Muted cluster — lower-left, tight
    { id: 'mtb',        label: 'mountain biking',   r: 5,  group: 'muted',  cx: 0.52,  cy: 0.82, href: '#about',                   tooltip: 'about me' },
    { id: 'climbing',   label: 'climbing',          r: 5,  group: 'muted',  cx: 0.58,  cy: 0.88, href: '#about',                   tooltip: 'about me' },
    { id: 'pole',       label: 'pole dance',        r: 5,  group: 'muted',  cx: 0.64,  cy: 0.82, href: '#about',                   tooltip: 'about me' },
  ],

  edges: [
    // Core connects to main cluster anchors only
    ['k','ux'], ['k','ai'], ['k','proddesign'], ['k','dataviz'], ['k','strategy'],
    // Research cluster — internal connections
    ['ux','segm'], ['ux','mixed'], ['ux','cultural'],
    ['segm','mixed'], ['cultural','mixed'],
    // AI / strategy cluster
    ['ai','strategy'], ['ai','ml'], ['strategy','proddesign'],
    // Design cluster — connected to both AI and research
    ['proddesign','design'], ['design','usability'], ['design','hf'],
    ['usability','ux'], ['proddesign','dataviz'],
    // Tools hang off AI and quiltai off research (used there)
    ['ai','claude'], ['figma','ai'], ['ai','lovable'],
    ['ai','quiltai'], ['ml','quiltai'], ['notebooklm','ai'], ['quiltai','ux'], ['quiltai','strategy'],
    // Data viz cluster
    ['dataviz','observable'],
    // Cross-cluster bridges
    ['ux','ai'], ['ai','dataviz'], ['segm','ai'], ['proddesign','ai'],
    // Personal — connected to each other only, climbing bridges to karissa
    ['k','climbing'], ['climbing','pole'], ['climbing','mtb'],
  ],
};
