const utils = {
    /**
     *  非空判断
     */
    isEmpty: function(value) {
        if(value == '' || value == 'null' || value == null || typeof value == 'undefined' || JSON.stringify(value) == '{}'){
            return true;
        }else{
            return false;
        }
    },
    /**
     *   数组是否含有一个元素或是否含有另一个数组
     *   name： 被含有元素或数组
     *   nameList： 该数组是否包含其他
     */
    arrayIsContain: function(name, nameList) {
        if(utils.isEmpty(name) || utils.isEmpty(nameList)){
            return false
        }
        if(typeof name == 'object'){
            for(var i=0; i<name.length; i++){
                if(nameList.indexOf(name[i])>-1){
                    return true
                }
            }
        }else if(typeof name == 'string'){
            if(nameList.indexOf(name)>-1){
                return true
            }
        }
        return false
    },
}
export default utils
