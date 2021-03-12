module.exports = {
  updateStudent(student, students,doc, cb) {

    const nodeToUpdate = students.find(curr => {
        return curr.extractAttribute("id") == student.id
    });
    
    nodeToUpdate.extractChildByName("name").changeContent(student.name);
    nodeToUpdate.extractChildByName("nickname").changeContent(student.nickname);
    nodeToUpdate.extractChildByName("age").changeContent(student.age);
    cb(doc);
    return;
  },
};
