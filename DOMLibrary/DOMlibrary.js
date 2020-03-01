
(function(window) {
    
    function defineDOMLibrary() {
        
        let MyLibrary = {};

        //testing method
        MyLibrary.alert = function() {
            alert("testing MyLibrary alert function")
        };


        //selecting current DOM element
        MyLibrary.selectCurrentElement = function() {

            var currentElement = DocumentOrShadowRoot.activeElement;

            return currentElement;
        }

        //creating a new element
        MyLibrary.addNew = function() {

            //var newElement = 

        }


        return defineDOMLibrary;
    }
});