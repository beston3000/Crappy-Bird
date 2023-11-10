var gdjs;(function(c){const _=new c.Logger("Audio manager"),w={preload:!0,onplayerror:(h,e)=>_.error("Can't play an audio file: "+e),onloaderror:(h,e)=>_.error("Error while loading an audio file: "+e)},f=h=>h>1?1:h<0?0:h;class y{constructor(e,s,t,i){this._id=null;this._oncePlay=[];this._onPlay=[];this._howl=e,this._initialVolume=f(s),this._loop=t,this._rate=i}isLoaded(){return this._howl.state()==="loaded"}play(){if(this.isLoaded()){const e=this._howl.play(this._id===null?"__default":this._id);this._id=e,this._howl.volume(this._initialVolume,e),this._howl.loop(this._loop,e),this._howl.rate(c.HowlerSoundManager.clampRate(this._rate),e),this._onPlay.forEach(s=>{this.on("play",s),s(e)}),this._oncePlay.forEach(s=>s(e)),this._onPlay=[],this._oncePlay=[]}else this._howl.once("load",()=>this.play());return this}pause(){return this._id!==null&&this._howl.pause(this._id),this}stop(){return this._id!==null&&this._howl.stop(this._id),this}playing(){return(this._id!==null?this._howl.playing(this._id):!0)||!this.isLoaded()}paused(){return!this.playing()}stopped(){return this.paused()&&this.getSeek()===0}getRate(){return this._rate}setRate(e){return this._rate=e,this._id!==null&&(e=c.HowlerSoundManager.clampRate(e),this._howl.rate(e,this._id)),this}getLoop(){return this._loop}setLoop(e){return this._loop=e,this._id!==null&&this._howl.loop(e,this._id),this}getVolume(){return this._id===null?this._initialVolume:this._howl.volume(this._id)}setVolume(e){return this._initialVolume=f(e),this._id!==null&&this._howl.volume(this._initialVolume,this._id),this}getMute(){return this._id===null?!1:this._howl.mute(this._id)}setMute(e){return this._id!==null&&this._howl.mute(e,this._id),this}getSeek(){return this._id===null?0:this._howl.seek(this._id)}setSeek(e){return this._id!==null&&this._howl.seek(e,this._id),this}getSpatialPosition(e){return this._id===null?0:this._howl.pos(this._id)[e==="x"?0:e==="y"?1:2]}setSpatialPosition(e,s,t){return this._id!==null&&this._howl.pos(e,s,t,this._id),this}fade(e,s,t){return this._id!==null&&this._howl.fade(f(e),f(s),t,this._id),this}on(e,s){return e==="play"?this._id===null?this._onPlay.push(s):this._howl.on(e,s,this._id):this._id===null?this.once("play",()=>this.on(e,s)):this._howl.on(e,s,this._id),this}once(e,s){return e==="play"?this._id===null?this._oncePlay.push(s):this.playing()?s(this._id):this._howl.once(e,s,this._id):this._id===null?this.once("play",()=>this.once(e,s)):this._howl.once(e,s,this._id),this}off(e,s){return this._id!==null&&this._howl.off(e,s,this._id),this}}c.HowlerSound=y;class m{constructor(e,s){this._loadedMusics={};this._loadedSounds={};this._availableResources={};this._globalVolume=100;this._sounds={};this._musics={};this._freeSounds=[];this._freeMusics=[];this._pausedSounds=[];this._paused=!1;this._resources=new Map,this.setResources(e),this._resourcesLoader=s;const t=this;document.addEventListener("deviceready",function(){document.addEventListener("pause",function(){const i=t._freeSounds.concat(t._freeMusics);for(let o in t._sounds)t._sounds.hasOwnProperty(o)&&i.push(t._sounds[o]);for(let o in t._musics)t._musics.hasOwnProperty(o)&&i.push(t._musics[o]);for(let o=0;o<i.length;o++){const l=i[o];!l.paused()&&!l.stopped()&&(l.pause(),t._pausedSounds.push(l))}t._paused=!0},!1),document.addEventListener("resume",function(){for(let i=0;i<t._pausedSounds.length;i++){const o=t._pausedSounds[i];o.stopped()||o.play()}t._pausedSounds.length=0,t._paused=!1},!1)})}setResources(e){this._resources.clear();for(const s of e)s.kind==="audio"&&this._resources.set(s.name,s)}static clampRate(e){return e>4?4:e<.5?.5:e}_getFileFromSoundName(e){return this._availableResources.hasOwnProperty(e)&&this._availableResources[e].file?this._availableResources[e].file:e}_storeSoundInArray(e,s){for(let t=0,i=e.length;t<i;++t)if(e[t]!==null&&e[t].stopped())return e[t]=s,s;return e.push(s),s}createHowlerSound(e,s,t,i,o){const l=this._getFileFromSoundName(e),n=s?this._loadedMusics:this._loadedSounds;return n.hasOwnProperty(l)||(n[l]=new Howl(Object.assign({src:[this._resourcesLoader.getFullUrl(l)],html5:s,xhr:{withCredentials:this._resourcesLoader.checkIfCredentialsRequired(l)},volume:0},w))),new c.HowlerSound(n[l],t,i,o)}loadAudio(e,s){const t=this._getFileFromSoundName(e),i=s?this._loadedMusics:this._loadedSounds;i.hasOwnProperty(t)||(i[t]=new Howl(Object.assign({src:[this._resourcesLoader.getFullUrl(t)],html5:s,xhr:{withCredentials:this._resourcesLoader.checkIfCredentialsRequired(t)},volume:0},w)))}unloadAudio(e,s){const t=this._getFileFromSoundName(e),i=s?this._loadedMusics:this._loadedSounds;if(!i[t])return;const o=i[t];function l(n){for(let r in n)n[r]&&n[r]._howl===o&&(n[r].stop(),delete n[r])}l(this._freeMusics),l(this._freeSounds),l(Object.values(this._musics)),l(Object.values(this._sounds)),l(this._pausedSounds),i[t].unload(),delete i[t]}unloadAll(){Howler.unload(),this._freeSounds.length=0,this._freeMusics.length=0,this._sounds={},this._musics={},this._pausedSounds.length=0,this._loadedMusics={},this._loadedSounds={}}playSound(e,s,t,i){const o=this.createHowlerSound(e,!1,t/100,s,i);this._storeSoundInArray(this._freeSounds,o),o.once("play",()=>{this._paused&&(o.pause(),this._pausedSounds.push(o))}),o.play()}playSoundOnChannel(e,s,t,i,o){this._sounds[s]&&this._sounds[s].stop();const l=this.createHowlerSound(e,!1,i/100,t,o);this._sounds[s]=l,l.once("play",()=>{this._paused&&(l.pause(),this._pausedSounds.push(l))}),l.play()}getSoundOnChannel(e){return this._sounds[e]||null}playMusic(e,s,t,i){const o=this.createHowlerSound(e,!0,t/100,s,i);this._storeSoundInArray(this._freeMusics,o),o.once("play",()=>{this._paused&&(o.pause(),this._pausedSounds.push(o))}),o.play()}playMusicOnChannel(e,s,t,i,o){this._musics[s]&&this._musics[s].stop();const l=this.createHowlerSound(e,!0,i/100,t,o);this._musics[s]=l,l.once("play",()=>{this._paused&&(l.pause(),this._pausedSounds.push(l))}),l.play()}getMusicOnChannel(e){return this._musics[e]||null}setGlobalVolume(e){this._globalVolume=e,this._globalVolume>100&&(this._globalVolume=100),this._globalVolume<0&&(this._globalVolume=0),Howler.volume(this._globalVolume/100)}getGlobalVolume(){return this._globalVolume}clearAll(){Howler.stop(),this._freeSounds.length=0,this._freeMusics.length=0,this._sounds={},this._musics={},this._pausedSounds.length=0}async preloadAudio(e,s){const t={};for(const r of s||this._resources.values())if(r.file){if(this._availableResources[r.name])continue;this._availableResources[r.name]=r,t[r.file]=(t[r.file]||[]).concat(r)}const i=Object.keys(t),o=i.length;if(o===0)return 0;const l=(r,d)=>new Promise((a,p)=>{const u=d?this._loadedMusics:this._loadedSounds;u[r]=new Howl(Object.assign({},w,{src:[this._resourcesLoader.getFullUrl(r)],onload:a,onloaderror:(g,S)=>p(S),html5:d,xhr:{withCredentials:this._resourcesLoader.checkIfCredentialsRequired(r)},volume:0}))});let n=0;return await Promise.all(i.map(async r=>{const d=t[r][0];if(d.preloadAsMusic)try{await l(r,!0)}catch(a){_.warn("There was an error while preloading an audio file: "+a)}if(d.preloadAsSound)try{await l(r,!1)}catch(a){_.warn("There was an error while preloading an audio file: "+a)}else if(d.preloadInCache)try{await new Promise((a,p)=>{const u=new XMLHttpRequest;u.withCredentials=this._resourcesLoader.checkIfCredentialsRequired(r),u.addEventListener("load",a),u.addEventListener("error",g=>p("XHR error: "+r)),u.addEventListener("abort",g=>p("XHR abort: "+r)),u.open("GET",this._resourcesLoader.getFullUrl(r)),u.send()})}catch(a){_.warn("There was an error while preloading an audio file: "+a)}n++,e(n,o)})),o}}c.HowlerSoundManager=m,c.SoundManager=m})(gdjs||(gdjs={}));
//# sourceMappingURL=howler-sound-manager.js.map
