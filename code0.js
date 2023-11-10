gdjs.GameCode = {};
gdjs.GameCode.GDCrappyBirdObjects1= [];
gdjs.GameCode.GDCrappyBirdObjects2= [];
gdjs.GameCode.GDCrappyBirdObjects3= [];
gdjs.GameCode.GDPipe1Objects1= [];
gdjs.GameCode.GDPipe1Objects2= [];
gdjs.GameCode.GDPipe1Objects3= [];
gdjs.GameCode.GDPipe2Objects1= [];
gdjs.GameCode.GDPipe2Objects2= [];
gdjs.GameCode.GDPipe2Objects3= [];
gdjs.GameCode.GDIndicatorObjects1= [];
gdjs.GameCode.GDIndicatorObjects2= [];
gdjs.GameCode.GDIndicatorObjects3= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];
gdjs.GameCode.GDKillObjects1= [];
gdjs.GameCode.GDKillObjects2= [];
gdjs.GameCode.GDKillObjects3= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe2Objects1Objects = Hashtable.newFrom({"Pipe2": gdjs.GameCode.GDPipe2Objects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe1Objects1Objects = Hashtable.newFrom({"Pipe1": gdjs.GameCode.GDPipe1Objects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIndicatorObjects1Objects = Hashtable.newFrom({"Indicator": gdjs.GameCode.GDIndicatorObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects2Objects = Hashtable.newFrom({"CrappyBird": gdjs.GameCode.GDCrappyBirdObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe1Objects2Objects = Hashtable.newFrom({"Pipe1": gdjs.GameCode.GDPipe1Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects2Objects = Hashtable.newFrom({"CrappyBird": gdjs.GameCode.GDCrappyBirdObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe2Objects2Objects = Hashtable.newFrom({"Pipe2": gdjs.GameCode.GDPipe2Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects2Objects = Hashtable.newFrom({"CrappyBird": gdjs.GameCode.GDCrappyBirdObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIndicatorObjects2Objects = Hashtable.newFrom({"Indicator": gdjs.GameCode.GDIndicatorObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe2Objects2Objects = Hashtable.newFrom({"Pipe2": gdjs.GameCode.GDPipe2Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe1Objects2Objects = Hashtable.newFrom({"Pipe1": gdjs.GameCode.GDPipe1Objects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIndicatorObjects2Objects = Hashtable.newFrom({"Indicator": gdjs.GameCode.GDIndicatorObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKillObjects2Objects = Hashtable.newFrom({"Kill": gdjs.GameCode.GDKillObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects1Objects = Hashtable.newFrom({"CrappyBird": gdjs.GameCode.GDCrappyBirdObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKillObjects1Objects = Hashtable.newFrom({"Kill": gdjs.GameCode.GDKillObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CrappyBird"), gdjs.GameCode.GDCrappyBirdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCrappyBirdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCrappyBirdObjects2[i].setY(gdjs.GameCode.GDCrappyBirdObjects2[i].getY() - ((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDCrappyBirdObjects2[i].getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.GameCode.GDCrappyBirdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCrappyBirdObjects2[i].returnVariable(gdjs.GameCode.GDCrappyBirdObjects2[i].getVariables().getFromIndex(0)).sub(0.3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SubtractCooldown");
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.GameCode.GDCrappyBirdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCrappyBirdObjects2[0].getPointX("")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrappyBird"), gdjs.GameCode.GDCrappyBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pipe1"), gdjs.GameCode.GDPipe1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe1Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrappyBirdObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCrappyBirdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCrappyBirdObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrappyBird"), gdjs.GameCode.GDCrappyBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Pipe2"), gdjs.GameCode.GDPipe2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe2Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrappyBirdObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCrappyBirdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCrappyBirdObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9929972);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CrappyBird"), gdjs.GameCode.GDCrappyBirdObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCrappyBirdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCrappyBirdObjects2[i].returnVariable(gdjs.GameCode.GDCrappyBirdObjects2[i].getVariables().getFromIndex(0)).setNumber(7);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrappyBird"), gdjs.GameCode.GDCrappyBirdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Indicator"), gdjs.GameCode.GDIndicatorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIndicatorObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9931172);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCrappyBirdObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Kill"), gdjs.GameCode.GDKillObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects2);
/* Reuse gdjs.GameCode.GDIndicatorObjects2 */
gdjs.GameCode.GDPipe1Objects2.length = 0;

gdjs.GameCode.GDPipe2Objects2.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDKillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDKillObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe2Objects2Objects, gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - 100, 0 - (gdjs.random(36) * 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe1Objects2Objects, (( gdjs.GameCode.GDPipe2Objects2.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects2[0].getX()), (( gdjs.GameCode.GDPipe2Objects2.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects2[0].getY()) + 670, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIndicatorObjects2Objects, (( gdjs.GameCode.GDPipe2Objects2.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects2[0].getX()) + 25, (( gdjs.GameCode.GDPipe2Objects2.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects2[0].getY()) + 400, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKillObjects2Objects, (( gdjs.GameCode.GDCrappyBirdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCrappyBirdObjects2[0].getPointX("")), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0), "");
}{for(var i = 0, len = gdjs.GameCode.GDKillObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDKillObjects2[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getWindowInnerWidth());
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CrappyBird"), gdjs.GameCode.GDCrappyBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Kill"), gdjs.GameCode.GDKillObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCrappyBirdObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKillObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CrappyBird"), gdjs.GameCode.GDCrappyBirdObjects1);
gdjs.GameCode.GDIndicatorObjects1.length = 0;

gdjs.GameCode.GDPipe1Objects1.length = 0;

gdjs.GameCode.GDPipe2Objects1.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDCrappyBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCrappyBirdObjects1[i].addForce(250, 0, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SubtractCooldown");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe2Objects1Objects, gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0) - 100, 0 - (gdjs.random(36) * 10), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPipe1Objects1Objects, (( gdjs.GameCode.GDPipe2Objects1.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects1[0].getX()), (( gdjs.GameCode.GDPipe2Objects1.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects1[0].getY()) + 670, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDIndicatorObjects1Objects, (( gdjs.GameCode.GDPipe2Objects1.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects1[0].getX()) + 25, (( gdjs.GameCode.GDPipe2Objects1.length === 0 ) ? 0 :gdjs.GameCode.GDPipe2Objects1[0].getY()) + 400, "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{


gdjs.GameCode.eventsList0(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCrappyBirdObjects1.length = 0;
gdjs.GameCode.GDCrappyBirdObjects2.length = 0;
gdjs.GameCode.GDCrappyBirdObjects3.length = 0;
gdjs.GameCode.GDPipe1Objects1.length = 0;
gdjs.GameCode.GDPipe1Objects2.length = 0;
gdjs.GameCode.GDPipe1Objects3.length = 0;
gdjs.GameCode.GDPipe2Objects1.length = 0;
gdjs.GameCode.GDPipe2Objects2.length = 0;
gdjs.GameCode.GDPipe2Objects3.length = 0;
gdjs.GameCode.GDIndicatorObjects1.length = 0;
gdjs.GameCode.GDIndicatorObjects2.length = 0;
gdjs.GameCode.GDIndicatorObjects3.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDKillObjects1.length = 0;
gdjs.GameCode.GDKillObjects2.length = 0;
gdjs.GameCode.GDKillObjects3.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
