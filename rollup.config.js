// import uglify from 'rollup-plugin-uglify';

export default [
	// iife , for older browsers
	{
		input: 'src/html.js',
		output: {
			file: 'html.js',
      name: 'html',
			format: 'iife',
			sourcemap: false
		},
		experimentalCodeSplitting: false,
		experimentalDynamicImport: false,
    // plugins: [
    //   uglify
    // ]
	}
]
