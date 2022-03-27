(function (root, struct) {
    debugger;
    var monTableau = [];
    var monObjet = { 'a': 'coucou' };
    monTableau.push(monObjet);

    var parent = null;
    var check = function (root, struct) {
        _.each(root, function (value, key) {
            if (value == struct) {
                parent = key;
            } else if (root == struct) {
                parent = '_root';
            } else if (typeof value === 'object') {
                check(value, struct);
            }
        });
    }
    check(root, monObjet);
    return parent;
})