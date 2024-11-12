/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

 class Inventory {
  constructor(items){
      this.items = items || [];
  }
  addItem(items){
      this.items.push(items);
  }
  removeItem(id){
      this.items = this.items.filter(item => item.id !== id);
  }
  listItems(){
      return 
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
