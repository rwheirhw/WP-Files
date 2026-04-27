const mongoose = require('mongoose');

async function runCRUD() {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/hellooo');
        console.log("Connected to MongoDB");

        // Schema
        const OrderSchema = new mongoose.Schema({
            order_id: { type: Number, required: true, unique: true },
            item: { type: String, required: true },
            etd: { type: String, required: true }
        });

        const Order = mongoose.model('Order', OrderSchema);

        
        const orders = [
            { order_id: 1200002, item: "Teflon Tubs", etd: "2 days" },
            { order_id: 1200003, item: "Notebooks", etd: "12 hours" },
            { order_id: 1200004, item: "HP Monitors", etd: "14 days" },
            { order_id: 1200005, item: "Motors", etd: "1 month" },
            { order_id: 1200006, item: "F-15s", etd: "60 months" },
            { order_id: 1200007, item: "F-34s", etd: "48 months" },
            { order_id: 1200008, item: "Cement", etd: "8 days" },
            { order_id: 1200009, item: "AIM-9s", etd: "36 months" },
            { order_id: 1200010, item: "Gunpowder", etd: "11 months" },
            { order_id: 1200011, item: "GPUs", etd: "3 days" }
        ];

        // Insert only if not already present
        await Order.insertMany(orders, { ordered: false }).catch(() => {});

        console.log("Data inserted (duplicates skipped)");

        
        const data = await Order.find();
        console.log("All Orders:", data);

        
        await Order.updateOne(
            { order_id: 1200003 },
            { $set: { etd: "8 hours" } }
        );
        console.log("Updated order 1200003");

          await Order.deleteOne({ order_id: "1200003" });
          console.log("Deleted");

    } catch (err) {
        console.log("Error:", err);
    }
}

runCRUD();