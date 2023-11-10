gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDFullscreenObjects1= [];
gdjs.MenuCode.GDFullscreenObjects2= [];
gdjs.MenuCode.GDFullscreenObjects3= [];
gdjs.MenuCode.GDNewPanelSpriteObjects1= [];
gdjs.MenuCode.GDNewPanelSpriteObjects2= [];
gdjs.MenuCode.GDNewPanelSpriteObjects3= [];
gdjs.MenuCode.GDPlayButtonBackgroundObjects1= [];
gdjs.MenuCode.GDPlayButtonBackgroundObjects2= [];
gdjs.MenuCode.GDPlayButtonBackgroundObjects3= [];
gdjs.MenuCode.GDSettingsButtonBackgroundObjects1= [];
gdjs.MenuCode.GDSettingsButtonBackgroundObjects2= [];
gdjs.MenuCode.GDSettingsButtonBackgroundObjects3= [];
gdjs.MenuCode.GDPlayTextObjects1= [];
gdjs.MenuCode.GDPlayTextObjects2= [];
gdjs.MenuCode.GDPlayTextObjects3= [];
gdjs.MenuCode.GDSettingsTextObjects1= [];
gdjs.MenuCode.GDSettingsTextObjects2= [];
gdjs.MenuCode.GDSettingsTextObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.window.isFullScreen(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "W") >= 0.2;
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "W");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "W") >= 0.2;
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "W");
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "W");
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButtonBackground"), gdjs.MenuCode.GDPlayButtonBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDPlayButtonBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDPlayButtonBackgroundObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDPlayButtonBackgroundObjects1[k] = gdjs.MenuCode.GDPlayButtonBackgroundObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDPlayButtonBackgroundObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fullscreen"), gdjs.MenuCode.GDFullscreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenObjects1[k] = gdjs.MenuCode.GDFullscreenObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDFullscreenObjects1.length = 0;
gdjs.MenuCode.GDFullscreenObjects2.length = 0;
gdjs.MenuCode.GDFullscreenObjects3.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.MenuCode.GDPlayButtonBackgroundObjects1.length = 0;
gdjs.MenuCode.GDPlayButtonBackgroundObjects2.length = 0;
gdjs.MenuCode.GDPlayButtonBackgroundObjects3.length = 0;
gdjs.MenuCode.GDSettingsButtonBackgroundObjects1.length = 0;
gdjs.MenuCode.GDSettingsButtonBackgroundObjects2.length = 0;
gdjs.MenuCode.GDSettingsButtonBackgroundObjects3.length = 0;
gdjs.MenuCode.GDPlayTextObjects1.length = 0;
gdjs.MenuCode.GDPlayTextObjects2.length = 0;
gdjs.MenuCode.GDPlayTextObjects3.length = 0;
gdjs.MenuCode.GDSettingsTextObjects1.length = 0;
gdjs.MenuCode.GDSettingsTextObjects2.length = 0;
gdjs.MenuCode.GDSettingsTextObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
