var cocos = require('cocos2d');
var geom = require('geometry');

var Ball = cocos.nodes.Node.extend({
    init: function(){
	Ball.superclass.init.call(this);

	var sprite = cocos.nodes.Sprite.create({
	    file: '/resources/sprites.png',
	    rect: new geom.Rect(64,0,16,16)
	});

	sprite.set('anchorPoint', new geom.Point(0, 0));
	this.addChild({child: sprite});
	this.set('contentSize', sprite.get('contentSize'));
    }
});

module.exports = Ball;