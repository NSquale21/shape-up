const MAX_VALUE = 600;
const getRandomValue = (max, min) => Math.floor(Math.random() * (max - min));

class Shape {
  constructor(height, width) {
		this.height = height;
		this.width = width;
		this.render();
		this.remove();
  }
	render() {
		this.div = $('<div class="shape"></div>');
		$('.canvas').append(this.div);
		this.top = getRandomValue(MAX_VALUE, this.height);
		this.left = getRandomValue(MAX_VALUE, this.width);
		this.div.css({
			height: this.height,
			width: this.width,
			top: this.top,
			left: this.left
		});
	}
	remove() {
		this.div.dblclick(() => {
			this.div.remove();
			$('.info').val('')
		});
	}
}

class Rectangle extends Shape {
	constructor(height, width) {
		super(height, width);
		this.div.prop('id', 'rectangle');
		this.div.css('background-color', 'rgba(2, 117, 216, 0.5)');
		this.describe();
	}
	describe() {
		this.div.click(() => {
			let height = this.height;
			let width = this.width;
			let shape = this.div.prop('id');
			let area = height * width;
			let perimeter = (height * 2) + (width * 2);
			$('#shape').val(shape);
			$('#height').val(height);
			$('#width').val(width);
			$('#area').val(area);
			$('#perimeter').val(perimeter);
			$('#radius').val('N/A');
		});
	}
}

class Square extends Shape {
	constructor(side) {
		super(side, side);
		this.div.prop('id', 'square');
		this.div.css('background-color', 'rgba(192, 192, 192, 0.5)');
		this.describe();
	}
	describe() {
		this.div.click(() =>{
			let sideH = this.height;
			let shape = this.div.prop('id');
			let area = sideH * sideH;
			let perimeter = sideH * 4;
			$('#shape').val(shape);
			$('#height').val(sideH);
			$('#width').val(sideH);
			$('#area').val(area);
			$('#perimeter').val(perimeter);
			$('#radius').val('N/A');
		});
	}
}

class Circle extends Shape {
	constructor(radius) {
		super(radius * 2, radius * 2);
		this.radius = radius;
		this.div.prop('id', 'circle');
		this.div.css({
			'background-color': 'rgba(92, 184, 92, 0.5)', 
			'border-radius': '50%'
		});
		this.describe();
	}
	describe() {
		this.div.click(() =>{
			let shape = this.div.prop('id');
			let radius = this.radius;
			let perimeter = Math.floor((2 * radius) * 3.14);
			let area = 3.14 * radius**2;
			$('#shape').val(shape);
			$('#height').val('N/A');
			$('#width').val('N/A');
			$('#area').val(area);
			$('#perimeter').val(perimeter);
			$('#radius').val(radius);
		});
	}
}

class Triangle extends Shape {
	constructor(side) {
		super(side, side);
		this.side = side;
		this.div.prop('id', 'triangle');
		this.div.css({
			height: 0,
			width: 0,
			'border-right': `${this.height}px solid transparent`,
			'border-bottom': `${this.height}px solid rgba(217, 83, 79, 0.5)`
		});
		this.describe();
	}
	describe() {
		this.div.click(() =>{
			let shape = this.div.prop('id');
			let height = this.side;
			let width = this.side;
			let perimeter = (height * 2) + Math.floor((Math.sqrt(2) * height));
			let area = 0.5 * this.side * this.side;
			$('#shape').val(shape);
			$('#height').val(height);
			$('#width').val(width);
			$('#area').val(area);
			$('#perimeter').val(perimeter);
			$('#radius').val('N/A');
		});
	}
}

$('#add-rectangle').click(() => {
	let h = $('#rec-h').val();
	let w = $('#rec-w').val();
	new Rectangle(h, w);
	h = $('#rec-h').val('');
	w = $('#rec-w').val('');
});

$('#add-square').click(() => {
	let sideH = $('#side-h').val();
	new Square(sideH);
	sideH = $('#side-h').val('');
});

$('#add-circle').click(() => {
	let radius = $('#cir-radius').val();
	new Circle(radius);
	radius = $('#cir-radius').val('');
});

$('#add-triangle').click(() => {
	let h = $('#tri-h').val();
	new Triangle(h);
	h = $('#tri-h').val('');
});

$('.clear-canvas').click(() => {
	$('.canvas').empty();
});