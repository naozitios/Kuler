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
// import { getFirestore, doc, getDoc, setDoc, Timestamp, getDocs, collection } from "firebase/firestore";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const db = getFirestore(firebaseApp);

export default {
    components: {
        FooterMain,
        PaymentSuccess,
        BrowseButton
    },
//     data(){
//         return {
//             product_list: [],
//             archived: false
//         }
//     },
//     async mounted() {
//         await this.getUser()
//     },
//     methods: {
//         async getUser() {
//             const auth = getAuth()
//             onAuthStateChanged(auth, (user) => {
//                 if (user) {
//                     console.log("before get products")
//                     this.getProducts(user.uid)
//                     return user.uid
//                     }
//                 } 
//             )
//         },
//         async getProducts(userID) {
//             console.log(userID)
//             let cart = await getDoc(doc(db, "usershoppingcarts", "firstPurchase"));
//             let archive_data = {}
//             let products = cart.data().products
//             for (var product_id in products) {
//                 let qty = products[product_id]
//                 archive_data[product_id] = qty
//             }
//             console.log(Timestamp.fromDate(new Date()))
//             console.log(userID)
//             if (!this.archived) {
//                 this.archivePurchase(userID, archive_data)
//                 this.archived = true
//             }
//         },
//         async archivePurchase(userID, archive_data) {
//             console.log(userID)
//             let size = 0
//             await getDocs(collection(db, 'users', userID, "purchaseHistory")).then(docs => size = docs.size)
//             console.log(size)
//             let purchase_historyID = String(size + 1)
//             console.log(purchase_historyID)
//             await setDoc(doc(db, "users", userID, "purchaseHistory", purchase_historyID), {
//                 timestamp: Timestamp.fromDate(new Date()),
//                 purchases: archive_data
//                 }
//             );
//         },
//         // getNow() {
//         //     const today = new Date();
//         //     const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//         //     const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         //     const dateTime = date +' '+ time;
//         //     this.timestamp = dateTime;
//         //     console.log(this.timestamp)
//         // }
    }
// }
</script>

<style scoped>
.success {
    margin-top: 5%;
    margin-bottom: 5%;
}
</style>