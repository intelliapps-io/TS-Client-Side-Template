import { observable, computed, action } from "mobx";

class AppState {
    @observable num: number = Math.floor(Math.random() * 100);    

    @computed get numSquared() { 
        return Math.sqrt(this.num); 
    };

    @action setNum = function(num: Number) {
        this.num = num;
    }
}

export default AppState;
