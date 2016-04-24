//add all of the example code to the example selector

if (!window.embedded) {
    for (var example in window.lodashExample) {
        if (window.lodashExample.hasOwnProperty(example)) {
            window.exampleSelector.innerHTML +=
                '<option value="' + example + '">' +
                    window.lodashExample[example].display +
                '</option>';
        }
    }
}
