new Vue({
    el: ".sample",
    data: {
        layers: [],
        layersTypes: {
            biscuit: {
                price1sm: 50,
                label: "Biscuit"
            },
            beze: {
                price1sm: 100,
                label: "Beze"
            },
            curd: {
                price1sm: 60,
                label: "Curd"
            }
        },
        defaultLayerType: "biscuit",
        defaultHeight: 4
    },
    computed: {
        price(){
            let sum = 0;
            this.layers.forEach((layer) => {
                sum += layer.height *
                    this.layersTypes[layer.type].price1sm;
            });
            return sum;
        },
        hasLayers(){
            return this.layers.length > 0
        }
    },
    methods: {
        addLayer(){
            this.layers.push({
                type: this.defaultLayerType,
                height: this.defaultHeight
            })
        },
        deleteLayer(i){
            this.layers.splice(i, 1)
        },
        changeHeight(i, dh){
            this.layers[i].height += dh;
        }
    }
});