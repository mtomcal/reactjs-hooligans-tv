import Reflux from 'reflux';

var name = "chat";

var actions = Reflux.createActions([
    "connect",
    "add"
]);

var store = Reflux.createStore({
    init() {
        this.chatCollection = [
            {name: "Super Hooligan", text: "Yeah go manchester!!!"},
            {name: "ChelseaDagger", text: "Go Chelsea. Manchester sucks!!!!"}
        ];
        this.listenToMany(actions);
    },
    onAdd({name, text}) {
        this.chatCollection = this.chatCollection.concat({name: name, text: text});
        this.trigger(this.chatCollection);
    },
    onConnect() {
        this.trigger(this.chatCollection);
    }
});

export default {
    name,
    store,
    actions
};

