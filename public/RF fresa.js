(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"RF fresa_atlas_1", frames: [[0,0,706,468]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.rflogo = function() {
	this.initialize(ss["RF fresa_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.RF = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.rflogo();
	this.instance.setTransform(-187,-110,0.5042,0.5042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-110,356,236);


(lib.Pencil_Icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ApZiWIGamaQAngoA2gBIACAAQAzgCAlAlIJAJAQASATAJAZQAJAZgCAaQgEA0gkAkImaGag");
	this.shape.setTransform(258.4682,60.247);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Az4T1QgfgdAIgbIEUukQAIgYARgRIYB4AILzLyI4BX/QgQASgaAHIn8CaQmTB5gTADIgGABQgaAAgdgcgAwLQNIKijKInZnXg");
	this.shape_1.setTransform(129.776,188.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.7,318.7);


// stage content:
(lib.RFfresa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Pencil_Icon
	this.instance = new lib.Pencil_Icon("synched",0);
	this.instance.setTransform(-63.3,304.5,0.3886,0.3886,0,0,180,159.6,159.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:6.75},0).wait(1).to({x:82.3},0).wait(1).to({x:166.05},0).wait(1).to({x:222.5},0).wait(1).to({x:278.95},0).wait(1).to({x:322.65},0).wait(1).to({x:400},0).wait(1).to({regX:-0.1,regY:318.8,skewX:45,skewY:225,x:462.05,y:366.45},0).wait(1).to({skewX:90,skewY:270,y:305.25},0).wait(1).to({y:263.35},0).wait(1).to({x:391.95},0).wait(1).to({x:317.3},0).wait(1).to({x:235.35},0).wait(1).to({x:153.4},0).wait(2).to({scaleX:0.3885,scaleY:0.3885,skewX:45,skewY:225,x:91.5,y:263.4},0).wait(1).to({skewX:0,skewY:180,y:182.35},0).wait(1).to({x:164.55,y:174.1},0).wait(1).to({x:240.1},0).wait(1).to({x:289.25},0).wait(1).to({x:363.85},0).wait(1).to({x:389.1},0).wait(1).to({regX:-0.2,skewX:14.998,skewY:194.998,x:451.2},0).wait(1).to({regX:-0.4,regY:318.9,skewX:30,skewY:210,x:520,y:175.3},0).wait(1).to({regX:-0.7,regY:318.8,skewX:45,skewY:225,x:551.2,y:174.1},0).wait(1).to({regX:-0.5,regY:318.7,skewX:69.2635,skewY:249.2635,x:570.7,y:175.15},0).wait(1).to({regY:318.6,skewX:90.7157,skewY:270.7157,x:594.8,y:175.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:633.8},0).wait(1).to({x:668.8},0).wait(19));

	// cuadrado
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egj8gVAMBH5AAAMAAAAqBMhH5AAAg");
	this.shape.setTransform(289.55,246.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#303F9F").s().p("Egj8AVBMAAAgqBMBH4AAAMAAAAqBg");
	this.shape_1.setTransform(289.55,246.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Egj8AIYIAA9YMBH5AAAMAAAAqBMg2XAAA");
	this.shape_2.setTransform(289.55,246.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#303F9F").s().p("AyZVBIAEgFIAAgKQgBgKgHgFQgJgFACgLIgPgfIAAgUIgQgQIANioQAIiCgNiIQgLhtAYh2IgfgPIg+ABQjFABjFgFImGgKIjhgHIAA9YMBH4AAAMAAAAqBg");
	this.shape_3.setTransform(289.55,246.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Egj8AIYIAA9YMBH5AAAMAAAAqBMglZAAA");
	this.shape_4.setTransform(289.55,246.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#303F9F").s().p("AhcVBQAXiYgPigQgGhGAUhFQA1jCh9iQQi0ADi9AIQjAAIjEgQQjFgSi9gGIAeAVIAAAAIgkABQjFABjFgFImGgKIjhgHIAA9YMBH4AAAMAAAAqBg");
	this.shape_5.setTransform(289.55,246.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Egj8AIYIAA9YMBH5AAAMAAAAqBI1WAA");
	this.shape_6.setTransform(289.55,246.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#303F9F").s().p("AOnVBQgFiaAXiPQAAinAVihQAKgCACgNQAGgdgDghIgkhDIAAgZIgfgVQiYgEiMgLQjGgQjBAYQi1AXidAhIgDADIgRADIgCgCIAWgEIAMgSIgpAMIgOgRQi0ADi9AIQjAAIjEgQQjFgSi9gGIAeAVIAAAAIgkABQjFABjFgFImGgKIjhgHIAA9YMBH4AAAMAAAAqBg");
	this.shape_7.setTransform(289.55,246.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("Egj8AOtIAA9YMBH5AAAIAAc8");
	this.shape_8.setTransform(289.55,206.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#303F9F").s().p("Ah5PDIAWgEIAMgSIgpAMIgOgRQi0ADi9AIQjAAIjEgQQjFgSi9gGIAeAVIAAAAIgkABQjFABjFgFImGgKIjhgHIAA9YMBH4AAAIAAc8IgEgDIgGgLIguAAIkZgIQjcgHjYgPQhvgDhpghQiAARiPAdIgpAUQgCAFgFACQgfAQgdAUIgKgHQiYgEiMgLQjGgQjBAYQi1AXidAhIgDADIgRADIgCgCg");
	this.shape_9.setTransform(289.55,208.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Egj8AOtIAA9YMBH5AAAIAARh");
	this.shape_10.setTransform(289.55,206.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#303F9F").s().p("Ah5PDIAWgEIAMgSIgpAMIgOgRQi0ADi9AIQjAAIjEgQQjFgSi9gGIAeAVIAAAAIgkABQjFABjFgFImGgKIjhgHIAA9YMBH4AAAIAARhIgOgMQgKgHgGgBQhRgUhZAEQhRAChOAFQkBAIj6grQjOggi8BBIgFAQIgfAPIgpBDIgPAKIgDAPIgHAaQgEAMgGADQgFAUgBAVQgIBiAsBSIAFAkQASAOALAXQBJCOg5CQIgJAEQgCAFgFACQgfAQgdAUIgKgHQiYgEiMgLQjGgQjBAYQi1AXidAhIgDADIgRADIgCgCg");
	this.shape_11.setTransform(289.55,208.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#303F9F").s().p("AuDOzQjFgTi9gFIAeAUIAAABIgkAAQjFACjFgFImGgLIjhgHIAA9YMBH4AAAIAARiIgOgMQgKgHgGgCQhRgThZAEQhRAChOAFQkBAHj6gqQjOghi8BCIgCAHIgNgcQg3gLgugRQiFgyiSABQicAAibAKQigAHiZAYIiPBNIgQAAIgeAVIgGAKQgEAFgHADQgOAJgFANQgEAGgBAFIgBAKIgEAGQgUAbgOAhQgEAMgEAPIgKAKQgDBCAMA5QAMAyAFA0IAQAVQADBWgRBNQgYBqA+BaQiYAEifAHQhAADhAAAQiBAAiDgLg");
	this.shape_12.setTransform(289.55,207.9083);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#303F9F").s().p("A6VOzImGgKIjhgHIAA9YMBH4AAAIAARiIgOgNQgKgHgGgBQhRgUhZAEQhRAChOAFQkBAIj6grQjOggi8BBIgCAHIgNgbQg3gMgugQQiFgyiSAAQicABibAKQigAGiZAZIiPBNIgDAAQgFgtgcggIgFgVQg2g2hKAIQgoABgWAPQibAIidgDQj5gEjpARQhUAEhLAOIgPAKQgYBugSB2QgdDFAADcIgBDjQiSAAiSgEg");
	this.shape_13.setTransform(289.55,207.2625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("Egj8AGSIAAvCMBH5AAAIAARh");
	this.shape_14.setTransform(289.55,168.2875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#303F9F").s().p("EAjuAIlQgKgHgGgBQhRgUhZAEQhRAChOAFQkBAIj6grQjOggi8BBIgCAHIgNgbQg3gMgugQQiFgyiSAAQicABibAKQigAGiZAZIiPBNIgDAAQgFgugcgfIgFgVQg2g2hKAIQgoABgWAPQibAIidgDQj5gEjpARQhFADg+AKIgcgfQhHgKg+gGQi1gVjBAEQh7ACh7gCQhAgBhAAIQg8gBg1AGIAAvCMBH4AAAIAARhIgOgMg");
	this.shape_15.setTransform(289.55,168.2875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("A7vowMA3fAAAIAARh");
	this.shape_16.setTransform(342.05,168.2875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#303F9F").s().p("AbhIlQgKgHgGgBQhRgUhZAEQhRAChOAFQkBAIj6grQjOggi8BBIgCAHIgNgbQg3gMgugQQiFgyiSAAQibABibAKQigAGiZAZIiQBNIgDAAQgFgugcgfIgFgVQg2g2hKAIQgoABgWAPQibAIidgDQj5gEjpARQgoACgnAEQAviDgJiWQgMjDgDjGIAAhcQgXglgKgxQgDgPAAgRIgKgPIAAhsMA3dAAAIAARhIgOgMg");
	this.shape_17.setTransform(342.05,168.2875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AywowMAlhAAAIAARh");
	this.shape_18.setTransform(399.5125,168.2875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#303F9F").s().p("ASiIlQgJgHgHgBQhRgUhYAEQhSAChNAFQkBAIj7grQjNggi8BBIgCAHIgNgbQg3gMgtgQQiGgyiRAAQicABicAKQigAGiZAZIhqA4IADgFIAAgfIAKgKQAQhLAKhYQAQiMAIiYQADgzgMg+IgKgPQgHhjgUhRQgbhygEh5IgCguMAlhAAAIAARhIgPgMg");
	this.shape_19.setTransform(399.5125,168.2875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AqKowIUVAAIAARh");
	this.shape_20.setTransform(454.55,168.2875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#303F9F").s().p("AKBIlQgKgHgGgBQhRgUhZAEQhRAChOAFQkBAIj5grQjOggi8BBIgCAHIgOgbIgBgBQASifgPinQgLiKgCiQQgBhSgDhSIgKgKQAAgfgEgfQgMhTAOhQQAGghgEgdIUUAAIAARhIgOgMg");
	this.shape_21.setTransform(454.0657,168.2875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("Agh1AIBDAAMAAAAqBIhDAAg");
	this.shape_22.setTransform(516.075,246.575);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#303F9F").s().p("AghVBMAAAgqBIBDAAMAAAAqBg");
	this.shape_23.setTransform(516.075,246.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("Ah/1AID/AAMAAAAqBIj/AAg");
	this.shape_24.setTransform(506.75,246.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#303F9F").s().p("Ah+VBMAAAgqBID9AAMAAAAqBg");
	this.shape_25.setTransform(506.75,246.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("Aj31AIHvAAMAAAAqBInvAAg");
	this.shape_26.setTransform(494.675,246.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#303F9F").s().p("Aj3VBMAAAgqBIHvAAMAAAAqBg");
	this.shape_27.setTransform(494.675,246.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("Aku1AIJdAAMAAAAqBIpdAAg");
	this.shape_28.setTransform(489.2,246.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#303F9F").s().p("AkuVBMAAAgqBIJdAAMAAAAqBg");
	this.shape_29.setTransform(489.2,246.525);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("Apc1AIS5AAMAAAAqBIy5AAg");
	this.shape_30.setTransform(459,246.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#303F9F").s().p("ApcVBMAAAgqBIS5AAMAAAAqBg");
	this.shape_31.setTransform(459,246.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("A0D1AMAoHAAAMAAAAqBMgoHAAAg");
	this.shape_32.setTransform(391.125,246.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#303F9F").s().p("A0DVBMAAAgqBMAoHAAAMAAAAqBg");
	this.shape_33.setTransform(391.125,246.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("A8L1AMA4XAAAMAAAAqBMg4XAAAg");
	this.shape_34.setTransform(339.125,246.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#303F9F").s().p("A8LVBMAAAgqBMA4XAAAMAAAAqBg");
	this.shape_35.setTransform(339.125,246.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("Egg2gVAMBBtAAAMAAAAqBMhBtAAAg");
	this.shape_36.setTransform(309.175,246.475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#303F9F").s().p("Egg2AVBMAAAgqBMBBtAAAMAAAAqBg");
	this.shape_37.setTransform(309.175,246.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("Egj6gVAMBH1AAAMAAAAqBMhH1AAAg");
	this.shape_38.setTransform(289.625,246.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#303F9F").s().p("Egj6AVBMAAAgqBMBH1AAAMAAAAqBg");
	this.shape_39.setTransform(289.625,246.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_12},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_10}]},2).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_21},{t:this.shape_20}]},2).to({state:[]},2).to({state:[{t:this.shape_23},{t:this.shape_22}]},4).to({state:[{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_31},{t:this.shape_30}]},2).to({state:[{t:this.shape_33},{t:this.shape_32}]},2).to({state:[{t:this.shape_35},{t:this.shape_34}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_39},{t:this.shape_38}]},2).to({state:[{t:this.shape_39},{t:this.shape_38}]},5).wait(1));

	// rf
	this.instance_1 = new lib.RF("synched",0);
	this.instance_1.setTransform(269.7,240.35,1.074,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({startPosition:0},0).wait(5).to({regX:-186.8,regY:8,scaleX:0.9406,x:68.8,y:248.35},0).wait(2).to({scaleX:0.5552,x:68.85},0).wait(2).to({scaleX:0.2529,x:68.75},0).wait(2).to({scaleX:0.0846},0).wait(2).to({regX:-185.8,scaleX:0.0097},0).to({_off:true},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(194.9,256.6,598.9,125.59999999999997);
// library properties:
lib.properties = {
	id: 'D2F37A1044322047B3B97AA4ED89EBB2',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/RF fresa_atlas_1.png?1738436505618", id:"RF fresa_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D2F37A1044322047B3B97AA4ED89EBB2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;