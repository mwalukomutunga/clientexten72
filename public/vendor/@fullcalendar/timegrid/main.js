!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@fullcalendar/core"),require("@fullcalendar/daygrid")):"function"==typeof define&&define.amd?define(["exports","@fullcalendar/core","@fullcalendar/daygrid"],t):t((e=e||self).FullCalendarTimeGrid={},e.FullCalendar,e.FullCalendarDayGrid)}(this,function(e,u,d){"use strict";var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function t(e,t){function r(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var n,s=function(){return(s=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},o=(t(r,n=u.FgEventRenderer),r.prototype.renderSegs=function(e,t,r){n.prototype.renderSegs.call(this,e,t,r),this.fullTimeFormat=u.createFormatter({hour:"numeric",minute:"2-digit",separator:this.context.options.defaultRangeSeparator})},r.prototype.attachSegs=function(e,t){for(var r=this.timeGrid.groupSegsByCol(e),i=0;i<r.length;i++)r[i]=this.sortEventSegs(r[i]);this.segsByCol=r,this.timeGrid.attachSegsByCol(r,this.timeGrid.fgContainerEls)},r.prototype.detachSegs=function(e){e.forEach(function(e){u.removeElement(e.el)}),this.segsByCol=null},r.prototype.computeSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.computeSegVerticals(e),r)for(var n=0;n<i;n++)this.computeSegHorizontals(r[n])},r.prototype.assignSegSizes=function(e){var t=this.timeGrid,r=this.segsByCol,i=t.colCnt;if(t.assignSegVerticals(e),r)for(var n=0;n<i;n++)this.assignSegCss(r[n])},r.prototype.computeEventTimeFormat=function(){return{hour:"numeric",minute:"2-digit",meridiem:!1}},r.prototype.computeDisplayEventEnd=function(){return!0},r.prototype.renderSegHtml=function(e,t){var r,i,n,o=e.eventRange,s=o.def,a=o.ui,l=s.allDay,d=u.computeEventDraggable(this.context,s,a),c=e.isStart&&u.computeEventStartResizable(this.context,s,a),h=e.isEnd&&u.computeEventEndResizable(this.context,s,a),c=this.getSegClasses(e,d,c||h,t),t=u.cssToStr(this.getSkinCss(a));return c.unshift("fc-time-grid-event"),u.isMultiDayRange(o.range)?(e.isStart||e.isEnd)&&(a=e.start,n=e.end,r=this._getTimeText(a,n,l),i=this._getTimeText(a,n,l,this.fullTimeFormat),n=this._getTimeText(a,n,l,null,!1)):(r=this.getTimeText(o),i=this.getTimeText(o,this.fullTimeFormat),n=this.getTimeText(o,null,!1)),'<a class="'+c.join(" ")+'"'+(s.url?' href="'+u.htmlEscape(s.url)+'"':"")+(t?' style="'+t+'"':"")+'><div class="fc-content">'+(r?'<div class="fc-time" data-start="'+u.htmlEscape(n)+'" data-full="'+u.htmlEscape(i)+'"><span>'+u.htmlEscape(r)+"</span></div>":"")+(s.title?'<div class="fc-title">'+u.htmlEscape(s.title)+"</div>":"")+"</div>"+(h?'<div class="fc-resizer fc-end-resizer"></div>':"")+"</a>"},r.prototype.computeSegHorizontals=function(e){var t,r,e=function(e){var t,r,i,n=[];for(t=0;t<e.length;t++){for(r=e[t],i=0;i<n.length&&a(r,n[i]).length;i++);r.level=i,(n[i]||(n[i]=[])).push(r)}return n}(e);if(function(e){var t,r,i,n,o;for(t=0;t<e.length;t++)for(r=e[t],i=0;i<r.length;i++)for((n=r[i]).forwardSegs=[],o=t+1;o<e.length;o++)a(n,e[o],n.forwardSegs)}(e),t=e[0]){for(r=0;r<t.length;r++)!function e(t){var r=t.forwardSegs;var i=0;var n;var o;if(void 0===t.forwardPressure){for(n=0;n<r.length;n++)o=r[n],e(o),i=Math.max(i,1+o.forwardPressure);t.forwardPressure=i}}(t[r]);for(r=0;r<t.length;r++)this.computeSegForwardBack(t[r],0,0)}},r.prototype.computeSegForwardBack=function(e,t,r){var i,n=e.forwardSegs;if(void 0===e.forwardCoord)for(n.length?(this.sortForwardSegs(n),this.computeSegForwardBack(n[0],t+1,r),e.forwardCoord=n[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-r)/(t+1),i=0;i<n.length;i++)this.computeSegForwardBack(n[i],0,e.forwardCoord)},r.prototype.sortForwardSegs=function(e){var e=e.map(l),r=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(this.context.eventOrderSpecs);return e.sort(function(e,t){return u.compareByFieldSpecs(e,t,r)}),e.map(function(e){return e._seg})},r.prototype.assignSegCss=function(e){for(var t=0,r=e;t<r.length;t++){var i=r[t];u.applyStyle(i.el,this.generateSegCss(i)),0<i.level&&i.el.classList.add("fc-time-grid-event-inset"),i.eventRange.def.title&&i.bottom-i.top<30&&i.el.classList.add("fc-short")}},r.prototype.generateSegCss=function(e){var t,r=this.context.options.slotEventOverlap,i=e.backwardCoord,n=e.forwardCoord,o=this.timeGrid.generateSegVerticalCss(e),s=this.context.isRtl;return r&&(n=Math.min(1,i+2*(n-i))),n=s?(t=1-n,i):(t=i,1-n),o.zIndex=e.level+1,o.left=100*t+"%",o.right=100*n+"%",r&&e.forwardPressure&&(o[s?"marginLeft":"marginRight"]=20),o},r);function r(e){var t=n.call(this)||this;return t.timeGrid=e,t}function a(e,t,r){void 0===r&&(r=[]);for(var i,n,o=0;o<t.length;o++)i=e,n=t[o],i.bottom>n.top&&i.top<n.bottom&&r.push(t[o]);return r}function l(e){var t=u.buildSegCompareObj(e);return t.forwardPressure=e.forwardPressure,t.backwardCoord=e.backwardCoord,t}var c,h=(t(p,c=o),p.prototype.attachSegs=function(e,t){this.segsByCol=this.timeGrid.groupSegsByCol(e),this.timeGrid.attachSegsByCol(this.segsByCol,this.timeGrid.mirrorContainerEls),this.sourceSeg=t.sourceSeg},p.prototype.generateSegCss=function(e){var t=c.prototype.generateSegCss.call(this,e),r=this.sourceSeg;return r&&r.col===e.col&&(r=c.prototype.generateSegCss.call(this,r),t.left=r.left,t.right=r.right,t.marginLeft=r.marginLeft,t.marginRight=r.marginRight),t},p);function p(){return null!==c&&c.apply(this,arguments)||this}var f,g=(t(m,f=u.FillRenderer),m.prototype.attachSegs=function(e,t){var r,i=this.timeGrid;return"bgEvent"===e?r=i.bgContainerEls:"businessHours"===e?r=i.businessContainerEls:"highlight"===e&&(r=i.highlightContainerEls),i.attachSegsByCol(i.groupSegsByCol(t),r),t.map(function(e){return e.el})},m.prototype.computeSegSizes=function(e){this.timeGrid.computeSegVerticals(e)},m.prototype.assignSegSizes=function(e){this.timeGrid.assignSegVerticals(e)},m);function m(e){var t=f.call(this)||this;return t.timeGrid=e,t}var y,v=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}],S=(t(C,y=u.DateComponent),C.prototype._processOptions=function(e){var t=e.slotDuration,r=e.snapDuration,t=u.createDuration(t),r=r?u.createDuration(r):t,i=u.wholeDivideDurations(t,r);null===i&&(r=t,i=1),this.slotDuration=t,this.snapDuration=r,this.snapsPerSlot=i,i=e.slotLabelFormat,Array.isArray(i)&&(i=i[i.length-1]),this.labelFormat=u.createFormatter(i||{hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"}),i=e.slotLabelInterval,this.labelInterval=i?u.createDuration(i):this.computeLabelInterval(t)},C.prototype.computeLabelInterval=function(e){for(var t,r,i=v.length-1;0<=i;i--)if(t=u.createDuration(v[i]),null!==(r=u.wholeDivideDurations(t,e))&&1<r)return t;return e},C.prototype.render=function(e,t){this.processOptions(t.options);var r=e.cells;this.colCnt=r.length,this.renderSkeleton(t.theme),this.renderSlats(e.dateProfile),this.renderColumns(e.cells,e.dateProfile),this.renderBusinessHours(t,e.businessHourSegs),this.renderDateSelection(e.dateSelectionSegs),this.renderFgEvents(t,e.fgEventSegs),this.renderBgEvents(t,e.bgEventSegs),this.renderEventSelection(e.eventSelection),this.renderEventDrag(e.eventDrag),this.renderEventResize(e.eventResize)},C.prototype.destroy=function(){y.prototype.destroy.call(this),this.renderSlats.unrender(),this.renderColumns.unrender(),this.renderSkeleton.unrender()},C.prototype.updateSize=function(e){var t=this.fillRenderer,r=this.eventRenderer,i=this.mirrorRenderer;(e||this.isSlatSizesDirty)&&(this.buildSlatPositions(),this.isSlatSizesDirty=!1),(e||this.isColSizesDirty)&&(this.buildColPositions(),this.isColSizesDirty=!1),t.computeSizes(e),r.computeSizes(e),i.computeSizes(e),t.assignSizes(e),r.assignSizes(e),i.assignSizes(e)},C.prototype._renderSkeleton=function(e){var t=this.el;t.innerHTML='<div class="fc-bg"></div><div class="fc-slats"></div><hr class="fc-divider '+e.getClass("widgetHeader")+'" style="display:none" />',this.rootBgContainerEl=t.querySelector(".fc-bg"),this.slatContainerEl=t.querySelector(".fc-slats"),this.bottomRuleEl=t.querySelector(".fc-divider")},C.prototype._renderSlats=function(e){var t=this.context.theme;this.slatContainerEl.innerHTML='<table class="'+t.getClass("tableGrid")+'">'+this.renderSlatRowHtml(e)+"</table>",this.slatEls=u.findElements(this.slatContainerEl,"tr"),this.slatPositions=new u.PositionCache(this.el,this.slatEls,!1,!0),this.isSlatSizesDirty=!0},C.prototype.renderSlatRowHtml=function(e){for(var t,r,i,n=this.context,o=n.dateEnv,s=n.theme,a=n.isRtl,l="",d=u.startOfDay(e.renderRange.start),c=e.minTime,h=u.createDuration(0);u.asRoughMs(c)<u.asRoughMs(e.maxTime);)t=o.add(d,c),r=null!==u.wholeDivideDurations(h,this.labelInterval),i='<td class="fc-axis fc-time '+s.getClass("widgetContent")+'">'+(r?"<span>"+u.htmlEscape(o.format(t,this.labelFormat))+"</span>":"")+"</td>",l+='<tr data-time="'+u.formatIsoTimeString(t)+'"'+(r?"":' class="fc-minor"')+">"+(a?"":i)+'<td class="'+s.getClass("widgetContent")+'"></td>'+(a?i:"")+"</tr>",c=u.addDurations(c,this.slotDuration),h=u.addDurations(h,this.slotDuration);return l},C.prototype._renderColumns=function(e,t){var r=this.context,i=r.calendar,n=r.view,o=r.isRtl,s=r.theme,a=r.dateEnv,r=new d.DayBgRow(this.context);this.rootBgContainerEl.innerHTML='<table class="'+s.getClass("tableGrid")+'">'+r.renderHtml({cells:e,dateProfile:t,renderIntroHtml:this.renderProps.renderBgIntroHtml})+"</table>",this.colEls=u.findElements(this.el,".fc-day, .fc-disabled-day");for(var l=0;l<this.colCnt;l++)i.publiclyTrigger("dayRender",[{date:a.toDate(e[l].date),el:this.colEls[l],view:n}]);o&&this.colEls.reverse(),this.colPositions=new u.PositionCache(this.el,this.colEls,!0,!1),this.renderContentSkeleton(),this.isColSizesDirty=!0},C.prototype._unrenderColumns=function(){this.unrenderContentSkeleton()},C.prototype.renderContentSkeleton=function(){var e,t=this.context.isRtl,r=[];r.push(this.renderProps.renderIntroHtml());for(var i=0;i<this.colCnt;i++)r.push('<td><div class="fc-content-col"><div class="fc-event-container fc-mirror-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>');t&&r.reverse(),e=this.contentSkeletonEl=u.htmlToElement('<div class="fc-content-skeleton"><table><tr>'+r.join("")+"</tr></table></div>"),this.colContainerEls=u.findElements(e,".fc-content-col"),this.mirrorContainerEls=u.findElements(e,".fc-mirror-container"),this.fgContainerEls=u.findElements(e,".fc-event-container:not(.fc-mirror-container)"),this.bgContainerEls=u.findElements(e,".fc-bgevent-container"),this.highlightContainerEls=u.findElements(e,".fc-highlight-container"),this.businessContainerEls=u.findElements(e,".fc-business-container"),t&&(this.colContainerEls.reverse(),this.mirrorContainerEls.reverse(),this.fgContainerEls.reverse(),this.bgContainerEls.reverse(),this.highlightContainerEls.reverse(),this.businessContainerEls.reverse()),this.el.appendChild(e)},C.prototype.unrenderContentSkeleton=function(){u.removeElement(this.contentSkeletonEl)},C.prototype.groupSegsByCol=function(e){for(var t=[],r=0;r<this.colCnt;r++)t.push([]);for(r=0;r<e.length;r++)t[e[r].col].push(e[r]);return t},C.prototype.attachSegsByCol=function(e,t){for(var r,i,n=0;n<this.colCnt;n++)for(r=e[n],i=0;i<r.length;i++)t[n].appendChild(r[i].el)},C.prototype.getNowIndicatorUnit=function(){return"minute"},C.prototype.renderNowIndicator=function(e,t){if(this.colContainerEls){for(var r=this.computeDateTop(t),i=[],n=0;n<e.length;n++){var o=u.createElement("div",{className:"fc-now-indicator fc-now-indicator-line"});o.style.top=r+"px",this.colContainerEls[e[n].col].appendChild(o),i.push(o)}0<e.length&&((t=u.createElement("div",{className:"fc-now-indicator fc-now-indicator-arrow"})).style.top=r+"px",this.contentSkeletonEl.appendChild(t),i.push(t)),this.nowIndicatorEls=i}},C.prototype.unrenderNowIndicator=function(){this.nowIndicatorEls&&(this.nowIndicatorEls.forEach(u.removeElement),this.nowIndicatorEls=null)},C.prototype.getTotalSlatHeight=function(){return this.slatContainerEl.getBoundingClientRect().height},C.prototype.computeDateTop=function(e,t){return t=t||u.startOfDay(e),this.computeTimeTop(u.createDuration(e.valueOf()-t.valueOf()))},C.prototype.computeTimeTop=function(e){var t=this.slatEls.length,r=this.props.dateProfile,e=(e.milliseconds-u.asRoughMs(r.minTime))/u.asRoughMs(this.slotDuration),e=Math.max(0,e);return e=Math.min(t,e),r=Math.floor(e),t=e-(r=Math.min(r,t-1)),this.slatPositions.tops[r]+this.slatPositions.getHeight(r)*t},C.prototype.computeSegVerticals=function(e){for(var t,r,i=this.context.options.timeGridEventMinHeight,n=0;n<e.length;n++)t=e[n],r=this.props.cells[t.col].date,t.top=this.computeDateTop(t.start,r),t.bottom=Math.max(t.top+i,this.computeDateTop(t.end,r))},C.prototype.assignSegVerticals=function(e){for(var t,r=0;r<e.length;r++)t=e[r],u.applyStyle(t.el,this.generateSegVerticalCss(t))},C.prototype.generateSegVerticalCss=function(e){return{top:e.top,bottom:-e.bottom}},C.prototype.buildPositionCaches=function(){this.buildColPositions(),this.buildSlatPositions()},C.prototype.buildColPositions=function(){this.colPositions.build()},C.prototype.buildSlatPositions=function(){this.slatPositions.build()},C.prototype.positionToHit=function(e,t){var r=this.context.dateEnv,i=this.snapsPerSlot,n=this.slatPositions,o=this.colPositions,s=o.leftToIndex(e),a=n.topToIndex(t);if(null!=s&&null!=a){var l=n.tops[a],e=n.getHeight(a),n=Math.floor((t-l)/e*i),t=this.props.cells[s].date,n=u.addDurations(this.props.dateProfile.minTime,u.multiplyDuration(this.snapDuration,a*i+n)),n=r.add(t,n);return{col:s,dateSpan:{range:{start:n,end:r.add(n,this.snapDuration)},allDay:!1},dayEl:this.colEls[s],relativeRect:{left:o.lefts[s],right:o.rights[s],top:l,bottom:l+e}}}},C.prototype._renderEventDrag=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.renderSegs(this.context,e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.renderSegs("highlight",this.context,e.segs))},C.prototype._unrenderEventDrag=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),e.isEvent?this.mirrorRenderer.unrender(this.context,e.segs,{isDragging:!0,sourceSeg:e.sourceSeg}):this.fillRenderer.unrender("highlight",this.context))},C.prototype._renderEventResize=function(e){e&&(this.eventRenderer.hideByHash(e.affectedInstances),this.mirrorRenderer.renderSegs(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},C.prototype._unrenderEventResize=function(e){e&&(this.eventRenderer.showByHash(e.affectedInstances),this.mirrorRenderer.unrender(this.context,e.segs,{isResizing:!0,sourceSeg:e.sourceSeg}))},C.prototype._renderDateSelection=function(e){e&&(this.context.options.selectMirror?this.mirrorRenderer.renderSegs(this.context,e,{isSelecting:!0}):this.fillRenderer.renderSegs("highlight",this.context,e))},C.prototype._unrenderDateSelection=function(e){e&&(this.context.options.selectMirror?this.mirrorRenderer.unrender(this.context,e,{isSelecting:!0}):this.fillRenderer.unrender("highlight",this.context))},C);function C(e,t){var r=y.call(this,e)||this;r.isSlatSizesDirty=!1,r.isColSizesDirty=!1,r.processOptions=u.memoize(r._processOptions),r.renderSkeleton=u.memoizeRendering(r._renderSkeleton),r.renderSlats=u.memoizeRendering(r._renderSlats,null,[r.renderSkeleton]),r.renderColumns=u.memoizeRendering(r._renderColumns,r._unrenderColumns,[r.renderSkeleton]),r.renderProps=t;var i=r.renderColumns,e=r.eventRenderer=new o(r),t=r.fillRenderer=new g(r);return r.mirrorRenderer=new h(r),r.renderBusinessHours=u.memoizeRendering(t.renderSegs.bind(t,"businessHours"),t.unrender.bind(t,"businessHours"),[i]),r.renderDateSelection=u.memoizeRendering(r._renderDateSelection,r._unrenderDateSelection,[i]),r.renderFgEvents=u.memoizeRendering(e.renderSegs.bind(e),e.unrender.bind(e),[i]),r.renderBgEvents=u.memoizeRendering(t.renderSegs.bind(t,"bgEvent"),t.unrender.bind(t,"bgEvent"),[i]),r.renderEventSelection=u.memoizeRendering(e.selectByInstanceId.bind(e),e.unselectByInstanceId.bind(e),[r.renderFgEvents]),r.renderEventDrag=u.memoizeRendering(r._renderEventDrag,r._unrenderEventDrag,[i]),r.renderEventResize=u.memoizeRendering(r._renderEventResize,r._unrenderEventResize,[i]),r}var E,b=(t(D,E=u.Splitter),D.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},D.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},D.prototype.getKeysForEventDef=function(e){return e.allDay?u.hasBgRendering(e)?["timed","allDay"]:["allDay"]:["timed"]},D);function D(){return null!==E&&E.apply(this,arguments)||this}var w,R=u.createFormatter({week:"short"}),G=(t(x,w=u.View),x.prototype.render=function(e,t){w.prototype.render.call(this,e,t),this.renderSkeleton(t)},x.prototype.destroy=function(){w.prototype.destroy.call(this),this.renderSkeleton.unrender()},x.prototype._renderSkeleton=function(e){this.el.classList.add("fc-timeGrid-view"),this.el.innerHTML=this.renderSkeletonHtml(),this.scroller=new u.ScrollComponent("hidden","auto");var t=this.scroller.el;this.el.querySelector(".fc-body > tr > td").appendChild(t),t.classList.add("fc-time-grid-container");var r=u.createElement("div",{className:"fc-time-grid"});t.appendChild(r),this.timeGrid=new S(r,{renderBgIntroHtml:this.renderTimeGridBgIntroHtml,renderIntroHtml:this.renderTimeGridIntroHtml}),e.options.allDaySlot&&(this.dayGrid=new d.DayGrid(this.el.querySelector(".fc-day-grid"),{renderNumberIntroHtml:this.renderDayGridIntroHtml,renderBgIntroHtml:this.renderDayGridBgIntroHtml,renderIntroHtml:this.renderDayGridIntroHtml,colWeekNumbersVisible:!1,cellWeekNumbersVisible:!1}),e=this.el.querySelector(".fc-divider"),this.dayGrid.bottomCoordPadding=e.getBoundingClientRect().height)},x.prototype._unrenderSkeleton=function(){this.el.classList.remove("fc-timeGrid-view"),this.timeGrid.destroy(),this.dayGrid&&this.dayGrid.destroy(),this.scroller.destroy()},x.prototype.renderSkeletonHtml=function(){var e=this.context,t=e.theme,e=e.options;return'<table class="'+t.getClass("tableGrid")+'">'+(e.columnHeader?'<thead class="fc-head"><tr><td class="fc-head-container '+t.getClass("widgetHeader")+'">&nbsp;</td></tr></thead>':"")+'<tbody class="fc-body"><tr><td class="'+t.getClass("widgetContent")+'">'+(e.allDaySlot?'<div class="fc-day-grid"></div><hr class="fc-divider '+t.getClass("widgetHeader")+'" />':"")+"</td></tr></tbody></table>"},x.prototype.getNowIndicatorUnit=function(){return this.timeGrid.getNowIndicatorUnit()},x.prototype.unrenderNowIndicator=function(){this.timeGrid.unrenderNowIndicator()},x.prototype.updateSize=function(e,t,r){w.prototype.updateSize.call(this,e,t,r),this.timeGrid.updateSize(e),this.dayGrid&&this.dayGrid.updateSize(e)},x.prototype.updateBaseSize=function(e,t,r){var i,n,o,s,a=this;this.axisWidth=u.matchCellWidths(u.findElements(this.el,".fc-axis")),this.timeGrid.colEls?(s=u.findElements(this.el,".fc-row").filter(function(e){return!a.scroller.el.contains(e)}),this.timeGrid.bottomRuleEl.style.display="none",this.scroller.clear(),s.forEach(u.uncompensateScroll),this.dayGrid&&(this.dayGrid.removeSegPopover(),(i=(i=this.context.options.eventLimit)&&"number"!=typeof i?5:i)&&this.dayGrid.limitRows(i)),r||(n=this.computeScrollerHeight(t),this.scroller.setHeight(n),((o=this.scroller.getScrollbarWidths()).left||o.right)&&(s.forEach(function(e){u.compensateScroll(e,o)}),n=this.computeScrollerHeight(t),this.scroller.setHeight(n)),this.scroller.lockOverflow(o),this.timeGrid.getTotalSlatHeight()<n&&(this.timeGrid.bottomRuleEl.style.display=""))):r||(n=this.computeScrollerHeight(t),this.scroller.setHeight(n))},x.prototype.computeScrollerHeight=function(e){return e-u.subtractInnerElHeight(this.el,this.scroller.el)},x.prototype.computeDateScroll=function(e){e=this.timeGrid.computeTimeTop(e);return(e=Math.ceil(e))&&e++,{top:e}},x.prototype.queryDateScroll=function(){return{top:this.scroller.getScrollTop()}},x.prototype.applyDateScroll=function(e){void 0!==e.top&&this.scroller.setScrollTop(e.top)},x.prototype.axisStyleAttr=function(){return null!=this.axisWidth?'style="width:'+this.axisWidth+'px"':""},x);function x(){var s=null!==w&&w.apply(this,arguments)||this;return s.splitter=new b,s.renderSkeleton=u.memoizeRendering(s._renderSkeleton,s._unrenderSkeleton),s.renderHeadIntroHtml=function(){var e=s.context,t=e.theme,r=e.dateEnv,i=e.options,n=s.props.dateProfile.renderRange,o=u.diffDays(n.start,n.end);return i.weekNumbers?(e=r.format(n.start,R),'<th class="fc-axis fc-week-number '+t.getClass("widgetHeader")+'" '+s.axisStyleAttr()+">"+u.buildGotoAnchorHtml(i,r,{date:n.start,type:"week",forceOff:1<o},u.htmlEscape(e))+"</th>"):'<th class="fc-axis '+t.getClass("widgetHeader")+'" '+s.axisStyleAttr()+"></th>"},s.renderTimeGridBgIntroHtml=function(){return'<td class="fc-axis '+s.context.theme.getClass("widgetContent")+'" '+s.axisStyleAttr()+"></td>"},s.renderTimeGridIntroHtml=function(){return'<td class="fc-axis" '+s.axisStyleAttr()+"></td>"},s.renderDayGridBgIntroHtml=function(){var e=s.context,t=e.theme,e=e.options;return'<td class="fc-axis '+t.getClass("widgetContent")+'" '+s.axisStyleAttr()+"><span>"+u.getAllDayHtml(e)+"</span></td>"},s.renderDayGridIntroHtml=function(){return'<td class="fc-axis" '+s.axisStyleAttr()+"></td>"},s}G.prototype.usesMinMaxTime=!0;var T,H=(t(I,T=u.DateComponent),I.prototype.firstContext=function(e){e.calendar.registerInteractiveComponent(this,{el:this.timeGrid.el})},I.prototype.destroy=function(){T.prototype.destroy.call(this),this.context.calendar.unregisterInteractiveComponent(this)},I.prototype.render=function(e,t){var r=this.context.dateEnv,i=e.dateProfile,n=e.dayTable,o=this.dayRanges=this.buildDayRanges(n,i,r),r=this.timeGrid;r.receiveContext(t),r.receiveProps(s({},this.slicer.sliceProps(e,i,null,t.calendar,r,o),{dateProfile:i,cells:n.cells[0]}),t)},I.prototype.renderNowIndicator=function(e){this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(e,this.timeGrid,this.dayRanges),e)},I.prototype.buildPositionCaches=function(){this.timeGrid.buildPositionCaches()},I.prototype.queryHit=function(e,t){t=this.timeGrid.positionToHit(e,t);if(t)return{component:this.timeGrid,dateSpan:t.dateSpan,dayEl:t.dayEl,rect:{left:t.relativeRect.left,right:t.relativeRect.right,top:t.relativeRect.top,bottom:t.relativeRect.bottom},layer:0}},I);function I(e){var t=T.call(this,e.el)||this;return t.buildDayRanges=u.memoize(P),t.slicer=new k,t.timeGrid=e,t}function P(e,t,r){for(var i=[],n=0,o=e.headerDates;n<o.length;n++){var s=o[n];i.push({start:r.add(s,t.minTime),end:r.add(s,t.maxTime)})}return i}var z,k=(t(_,z=u.Slicer),_.prototype.sliceRange=function(e,t){for(var r=[],i=0;i<t.length;i++){var n=u.intersectRanges(e,t[i]);n&&r.push({start:n.start,end:n.end,isStart:n.start.valueOf()===e.start.valueOf(),isEnd:n.end.valueOf()===e.end.valueOf(),col:i})}return r},_);function _(){return null!==z&&z.apply(this,arguments)||this}var B,F=(t(O,B=G),O.prototype.render=function(e,t){B.prototype.render.call(this,e,t);var r=this.props,i=r.dateProfile,n=r.dateProfileGenerator,o=t.nextDayThreshold,r=this.buildDayTable(i,n),e=this.splitter.splitProps(e);this.header&&this.header.receiveProps({dateProfile:i,dates:r.headerDates,datesRepDistinctDays:!0,renderIntroHtml:this.renderHeadIntroHtml},t),this.simpleTimeGrid.receiveProps(s({},e.timed,{dateProfile:i,dayTable:r}),t),this.simpleDayGrid&&this.simpleDayGrid.receiveProps(s({},e.allDay,{dateProfile:i,dayTable:r,nextDayThreshold:o,isRigid:!1}),t),this.startNowIndicator(i,n)},O.prototype._renderSkeleton=function(e){B.prototype._renderSkeleton.call(this,e),e.options.columnHeader&&(this.header=new u.DayHeader(this.el.querySelector(".fc-head-container"))),this.simpleTimeGrid=new H(this.timeGrid),this.dayGrid&&(this.simpleDayGrid=new d.SimpleDayGrid(this.dayGrid))},O.prototype._unrenderSkeleton=function(){B.prototype._unrenderSkeleton.call(this),this.header&&this.header.destroy(),this.simpleTimeGrid.destroy(),this.simpleDayGrid&&this.simpleDayGrid.destroy()},O.prototype.renderNowIndicator=function(e){this.simpleTimeGrid.renderNowIndicator(e)},O);function O(){var e=null!==B&&B.apply(this,arguments)||this;return e.buildDayTable=u.memoize(M),e}function M(e,t){t=new u.DaySeries(e.renderRange,t);return new u.DayTable(t,!1)}var N=u.createPlugin({defaultView:"timeGridWeek",views:{timeGrid:{class:F,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}});e.AbstractTimeGridView=G,e.TimeGrid=S,e.TimeGridSlicer=k,e.TimeGridView=F,e.buildDayRanges=P,e.buildDayTable=M,e.default=N,Object.defineProperty(e,"__esModule",{value:!0})});