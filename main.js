const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

//TODO: Filters

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', img, function() {
                this.brightness(10).render();
            })
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function() {
                this.brightness(-10).render();
            })
        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function() {
                this.contrast(10).render();
            })
        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function() {
                this.contrast(-10).render();
            })
        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function() {
                this.saturation(10).render();
            })
        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function() {
                this.saturation(-10).render();
            })
        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function() {
                this.vibrance(10).render();
            })
        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function() {
                this.vibrance(-10).render();
            })
        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function() {
                this.vintage().render();
            })
        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function() {
                this.lomo().render();
            })
        } else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function() {
                this.clarity().render();
            })
        } else if (e.target.classList.contains('sincity-add')) {
            Caman('#canvas', img, function() {
                this.sinCity().render();
            })
        } else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function() {
                this.crossProcess().render();
            })
        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function() {
                this.pinhole().render();
            })
        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function() {
                this.nostalgia().render();
            })
        } else if (e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', img, function() {
                this.herMajesty().render();
            })
        }
    }
})

// Revert Filters
	revertBtn.addEventListener('click', (e) => {
		Caman('#canvas', img, function() {
			this.revert();
		});
	});

// Download Button
	downloadBtn.addEventListener('click', (e) => {
		// Get file ext
		const fileExtension = fileName.slice(-4);

		// init new filename
		let newFileName;

		// Check image type
		if(fileExtension === '.jpg' || fileExtension === '.png') {
			newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
		}
	download(canvas, newFileName)
	})

	// Call download
	function download(canvas, filename) {
		// initialize event
		let e;
		// create link
		const link = document.createElement('a');

		// set props
		link.download = filename;
		link.href = canvas.toDataURL('image/jpeg', 0.8);
		// new mouse event
		e = new MouseEvent('click');
		// dispatch
		link.dispatchEvent(e);

	}


// Upload File
uploadFile.addEventListener('change', (e) => {
    // Get File
    const file = document.getElementById('upload-file').files[0];

    // init FileReader
    const reader = new FileReader();

    if (file) {
        // Set file name
        fileName = file.name;
        // Read data as URL
        reader.readAsDataURL(file);
    }

    //Add image to canvas
    reader.addEventListener(
        'load',
        () => {
            // Create img
            img = new Image();
            // Set src
            img.src = reader.result;
            // On img load, add to canvas
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0, img.width, img.height);
                canvas.removeAttribute('data-caman-id');
            }
        },
        false);
});