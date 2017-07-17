/* @flow */


type Step <model, action> = (state:model, message:action) => model
type Config <model, action> = {
  step: Step<model, action>;
  init: model;
  actions: Array<action>;
}

const run = <model, action>(config:Config<model, action>):void => {
  var state = config.step(config.init, {type: 'Nothing'})
}
