import jsPDF from 'jspdf';

export function generatePDF(items, users) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text('SplitIt - Bill Summary', 10, 20);

  doc.setFontSize(12);
  doc.text('Items:', 10, 40);
  let yPosition = 50;

  items.forEach((item, index) => {
    doc.text(`${index + 1}. ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`, 20, yPosition);
    yPosition += 10;
  });

  yPosition += 10;
  doc.text('Users:', 10, yPosition);
  yPosition += 10;

  users.forEach((user) => {
    const userTotal = items
      .filter(item => item.assignedTo.includes(user.id))
      .reduce((total, item) => total + (item.price * item.quantity) / item.assignedTo.length, 0);

    doc.text(`${user.name} - $${userTotal.toFixed(2)}`, 20, yPosition);
    yPosition += 10;
  });

  doc.save('splitit-bill.pdf');
}