/*!
* YUI Aytogrow 0.1
* https://github.com/irae/yui-autogrow
*
* Copyright (c) 2011 Iraê Carvalho
* Dual-licensed under the BSD or MIT licenses. See LICENCE file.
*/
YUI().use(['node-event-delegate','node-event-simulate','node-style'], function(Y) {

    // Bind keyup event on all textareas by using delegate
    Y.one(document).delegate('keyup', function(){

        var self = this, // for better minification
            textLineHeight = self.getData('textLineHeight'),
            currentHeight = self.getData('currentHeight'),
            newHeight = self.get('scrollHeight');

        if(!textLineHeight) { // init this particular textarea
            textLineHeight = parseInt(self.getStyle('lineHeight').replace('normal','1.2'),10);
            currentHeight = parseInt(self.getStyle('height'),10);
            self.setStyle('overflow','hidden');
            // store data in memory for less DOM querying
            self.setData('textLineHeight', textLineHeight);
            self.setData('currentHeight', currentHeight);
        }

        if (newHeight > currentHeight) {
            newHeight = newHeight + 2 * textLineHeight;
            self.setStyle('height',newHeight + 'px');
            // Update the stored height only in memory
            self.setData('currentHeight',newHeight);
        }

    },'textarea');

    // trigger textareas keyup so we init preloaded values
    Y.all('textarea').each(function(){
        this.simulate('keyup');
    });

});
