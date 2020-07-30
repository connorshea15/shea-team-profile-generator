// This class will extend Employee and add officeNumber and getRole(), which is overridden to return 'Manager'

function Manager(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;

    Manager.prototype.getName = function() {
        return name = this.name;
    };

    Manager.prototype.getId = function() {
        return id = this.id;
    };
};

module.exports = Manager;