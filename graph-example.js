﻿"use strict";function Graph_example() {    this.canvas = document.getElementById('canvas');    this.context = canvas.getContext('2d');    if (this.context.canvas.width != window.innerWidth)        this.canvas.width = window.innerWidth;    if (this.context.canvas.height != window.innerHeight)        this.context.canvas.height = window.innerHeight;    this.plot_canvas = document.getElementById('plot_canvas');    this.plot_context = this.plot_canvas.getContext('2d');    if (this.plot_context.canvas.width != window.innerWidth)        this.plot_context.canvas.width = window.innerWidth;    if (this.plot_context.canvas.height != window.innerHeight)        this.plot_context.canvas.height = window.innerHeight;        this.graph;        this.xmax = 10;        this.needResize = true;        this.xA = [];        this.yA = [];        this.i = 0;        this.lst = Date.now();        this.number_of_moves_per_sec = 300;        this.isRun = true;        this.plot_canvas.addEventListener("mousedown", this.toggleRun, false);        this.loop();}Graph_example.prototype.loop = function() {    var dif = Date.now() - this.lst;    this.lst = Date.now();    if( this.isRun ) {        var iter = this.number_of_moves_per_sec * dif/1000 + this.i;    	while( this.i < iter ) {    	    var bin = Math.round(Helper.gauss_random()*100)/100;            this.xA[bin] = (this.xA[bin] || 0) + 1;    	    //graph.plot1(bin,yA[bin]-1,yA[bin], "#0000ff");     	    var bin = Math.round(Helper.cauchy_random()*100)/100;             this.yA[bin] = (this.yA[bin] || 0) + 1;    	    //graph.plot1(bin,xA[bin]-1,xA[bin], "#ff0000");    	    ++this.i;            if( this.xA[bin] > this.xmax || this.yA[bin] > this.xmax ) {                this.needResize = true;            }    	}        if( this.needResize === true ) {            this.xmax = 2 * this.xmax;            this.context.clearRect(0,0,this.canvas.width,this.canvas.height);            this.graph = new Graph(this.context,this.plot_context,-4,4,0,this.xmax,(this.plot_context.canvas.width-100)/2,this.plot_context.canvas.height-50,this.plot_context.canvas.width-100,this.plot_context.canvas.height-50);            this.graph.drawgrid(1,0.2,this.xmax/5,this.xmax/20);            this.graph.drawaxes('x','y');            this.needResize = false;        }        this.plot_context.clearRect(0,0,this.plot_canvas.width,this.plot_canvas.height);        this.graph.plot(this.xA, "#ff0000");        this.graph.plot(this.yA, "#0000ff");    }	window.requestAnimationFrame(this.loop.bind(this));}Graph_example.prototype.toggleRun = function() {    this.isRun = !this.isRun;}/*var graph = new Graph(context,plot_context,-4,4,0,5000,275,380,450,350);graph.drawgrid(1,0.2,1000,200);graph.drawaxes('x','y');var xA = [];for (var i=0; i<=1000000; i++){     var bin = Math.round(gauss_random()*100)/100;     xA[bin] = (xA[bin] || 0) + 1;}graph.plot(xA, "#ff0000");var yA = [];for (var i=0; i<=1000000; i++){     var bin = Math.round(cauchy_random()*100)/100;     yA[bin] = (yA[bin] || 0) + 1;}graph.plot(yA, "#0000ff");*/var ge = new Graph_example();