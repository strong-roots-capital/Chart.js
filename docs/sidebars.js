module.exports = {
  someSidebar: {
    Introduction: ['index'],
    'Getting Started': [
      'getting-started/index',
      'getting-started/installation',
      'getting-started/integration',
      'getting-started/usage',
      'getting-started/v3-migration'
     ],
    General: [
      'general/data-structures',
      'general/accessibility',
      'general/responsive',
      'general/device-pixel-ratio',
      {Interactions: ['general/interactions/index', 'general/interactions/events', 'general/interactions/modes']},
      'general/options',
      'general/colors',
      'general/fonts',
      'general/performance'
    ],
    Configuration: [
      'configuration/index',
      'configuration/animations',
      'configuration/layout',
      'configuration/legend',
      'configuration/title',
      'configuration/tooltip',
      'configuration/elements'
    ],
    'Chart Types': [
      'charts/line',
      'charts/bar',
      'charts/radar',
      'charts/doughnut',
      'charts/polar',
      'charts/bubble',
      'charts/scatter',
      'charts/area',
      'charts/mixed'
    ],
    Axes:[
     'axes/index',
     { Cartesian: [
       'axes/cartesian/index',
       'axes/cartesian/category',
       'axes/cartesian/linear',
       'axes/cartesian/logarithmic',
       'axes/cartesian/time'
     ]},
     { Radial: [
       'axes/radial/index',
       'axes/radial/linear'
     ]},
     'axes/labelling',
     'axes/styling'
   ],
   Developers: [
     'developers/index',
     'developers/api',
     {
       type: 'link',
       label: 'TypeDoc',
       href: 'typedoc/index.html'
     },
     'developers/updates',
     'developers/plugins',
     'developers/charts',
     'developers/axes',
     'developers/contributing'
    ],
    'Additional Notes':[
      'notes/comparison',
       {
         type: 'link',
         label: 'Extensions',
         href: 'https://github.com/chartjs/awesome'
       },
      'notes/license'
    ]
  },
};
