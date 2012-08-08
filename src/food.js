/** 
    A module representing a Food object.
    @module Food
 */

/**
 * Creates a new Food object.
 *
 * @constructor
 * @extends Mover
 *
 * @param {Object} [opt_options] Options.
 * @param {number} [opt_options.mass = 50] Mass. Increase for a greater gravitational effect.
 * @param {boolean} [opt_options.isStatic = true] If true, object will not move. 
 * @param {number} [opt_options.width = 20] Width.
 * @param {number} [opt_options.height = 20] Height. 
 * @param {Object} [opt_options.color = {r: 155, g: 231, b: 93}] Color.
 * @param {number} [opt_options.opacity = 0.5] The particle's opacity.  
 */
function Food(opt_options) {

  'use strict';

  var options = opt_options || {};

  exports.Mover.call(this, options);

  this.mass = options.mass || 50;
  this.isStatic = options.isStatic || true;
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.color = options.color || {r: 155, g: 231, b: 93};
  this.opacity = options.opacity || 0.5;
}
exports.Utils.inherit(Food, exports.Mover);
exports.Food = Food;