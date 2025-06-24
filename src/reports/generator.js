import PDFDocument from 'pdfkit';

export const generateCourseReport = (course, students) => {
  const doc = new PDFDocument();
  
  // Configuración del documento
  doc.fontSize(20).text(`Reporte del Curso: ${course.code}`, { align: 'center' });
  doc.moveDown();
  
  // Información del curso
  doc.fontSize(14).text(`Nombre: ${course.name}`);
  doc.text(`Profesor: ${course.teacher.name}`);
  doc.text(`Fecha de inicio: ${course.startDate}`);
  doc.text(`Fecha de fin: ${course.endDate}`);
  doc.moveDown();
  
  // Lista de estudiantes
  doc.fontSize(16).text('Estudiantes Inscritos:', { underline: true });
  students.forEach((student, index) => {
    doc.text(`${index + 1}. ${student.code} - ${student.name} - ${student.email}`);
  });
  
  return doc;
};