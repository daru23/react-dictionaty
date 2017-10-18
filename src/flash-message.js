/**
 * Created by daru on 18/10/2017.
 */
class FlashMessage {
    constructor(message) {
        this.message = message;
    }

    display(){
        alert(this.message);
    }
}

export default FlashMessage;