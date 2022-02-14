module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			screens: {
				sm: { max: '639px' },
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1560px'
			},
			fontFamily: {
				sans: 'Inter, sans-serif'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',

				black: '#000',
				white: '#fff',

				background: '#222027',

				gray: {
					1: '#2A2830',
					2: '#2E2C35',
					3: '#32303A',
					4: '#3A3743',
					5: '#4B4757',
					6: '#585469',
					7: '#6E6986',
					8: '#8A82A4',
					9: '#A59BC2',
					10: '#CFC7E4'
				},

				gold: {
					1: '#524932',
					2: '#715F33',
					3: '#867341',
					4: '#A78B44',
					5: '#DBBE76',
					6: '#EED8A1',
					7: '#F0E6CB'
				},

				blue: {
					1: '#292852',
					2: '#3C3B97',
					3: '#5351D2',
					4: '#6D6BED',
					5: '#8F8EF1',
					6: '#A09FEF',
					7: '#C9C9F8'
				},

				red: {
					1: '#E24848',
					2: '#F14646'
				}
			},

			invert: {
				css: {
					'--tw-prose-body': 'var(--tw-prose-invert-body)',
					'--tw-prose-headings': 'var(--tw-prose-invert-headings)',
					'--tw-prose-lead': 'var(--tw-prose-invert-lead)',
					'--tw-prose-links': 'var(--tw-prose-invert-links)',
					'--tw-prose-bold': 'var(--tw-prose-invert-bold)',
					'--tw-prose-counters': 'var(--tw-prose-invert-counters)',
					'--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
					'--tw-prose-hr': 'var(--tw-prose-invert-hr)',
					'--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
					'--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
					'--tw-prose-captions': 'var(--tw-prose-invert-captions)',
					'--tw-prose-code': 'var(--tw-prose-invert-code)',
					'--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
					'--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
					'--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
					'--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
