let btnTambah = document.getElementById('btn-tambah');
let output = document.getElementById('output');

btnTambah.onclick = (e) => {
   let input = document.getElementById('assignment');
   let title = input.value.trim();
   if (title == "") {
      alert("Inputan masih kosong");
      return;
   }
   let task = document.createElement("div");
   task.id = `${Date.now()}`;
   task.className = `flex justify-between items-center mx-1 my-7`;
   task.innerHTML = `
         <p class="flex-grow">${title}</p>
         <input type="button" id="btn-selesai" value="SELESAI" data-task="${task.id}"
                class="bg-green-400 px-1 mx-1 rounded font-bold">
         <input type="button" id="btn-hapus" value="HAPUS" data-task="${task.id}"
                class="bg-red-400 px-2 mx-1 rounded font-bold">
   `;
   output.appendChild(task);
   input.value = "";
   e.preventDefault();
}
