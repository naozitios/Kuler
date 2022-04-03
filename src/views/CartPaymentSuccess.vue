<template>
<div class = "success">
    <PaymentSuccess/>
    <BrowseButton/>
</div>
<FooterMain/>
</template>

<script>
import FooterMain from "@/components/footer_components/FooterMain.vue"
import PaymentSuccess from "@/components/PaymentSuccess.vue"
import BrowseButton from "@/components/BrowseButton.vue"
// import firebaseApp from "@/firebase.js";
// import { getFirestore, doc, setDoc } from "firebase/firestore";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const db = getFirestore(firebaseApp);

export default {
    components: {
        FooterMain,
        PaymentSuccess,
        BrowseButton
    },
    // async monuted() {
    //     await this.getUser()
    // },
    // methods: {
    //     async getUser() {
    //         const auth = getAuth()
    //         onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             console.log(user.uid)
    //             this.resetCart(user.uid)
    //             }
    //         })
    //     },
    //     async resetCart(userID) {
    //         console.log("reset cart")
    //         let empty_data = {"products": undefined, "date": ""}
    //         await setDoc(doc(db, "usershoppingcarts", userID), empty_data);
    //     }
    // },
}
</script>

<style scoped>
.success {
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>