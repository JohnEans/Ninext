
function getExpressions(obj) {
    var lst = [];
    for (var key in Object.keys(obj)) {
        var name = Object.keys(obj)[key].match(RegExp('.*(?=Exp\\b)'));
        if (name && name[0].length) {
            lst.push(name);
        }
        if (obj.onClick && obj.onClick.length && !obj.onClickExp) {
            var exp = queries.parseSystem(database.schema, obj.type, obj.onClick, null);
            if (exp)
                obj.onClickExp = exp;
        }
    }
    return lst;
}
function getFindElements() {
    var lstFunctions = [];
    for (var t in database.schema.types) {
        var type = database.schema.types[t];
   
        var lstExpType = getExpressions(type);
        for (var f in type.fields) {
            var field = type.fields[f];
            if (field.getExpressions) {
                var exps = field.getExpressions();
                for (var e in exps) {
                    var exp = exps[e];
                    var human = exp.toHumanString('', 0);
                    var fn = { type: type.caption, typeId: type.id, field: field.caption, fieldId: field.id, caption: human, exp: exp };
                    lstFunctions.push(fn);
                }
            }
        }
    } return lstFunctions;
} function findInList(elements, f, ft) {
    var lst = []; var re = new RegExp('\\b' + f + '\\b', 'i'); for (var e in elements) {
        var element = elements[e]; if (element.caption.search(re) != -1) {
            var e = Object.assign(element);
            delete e.exp; lst.push(element);
        }
    } return lst;
} var lst = getFindElements(); var r = findInList(lst, find, findType);
return JSON.stringify(r);






