

import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { deleteContact } from "../../redux/contacts/operations";

import clsx from "clsx";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    toast.success("Contact deleted successfully!");
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={clsx(css.contactBox)}>
      <ul className={clsx(css.contactList)}>
        <li className={clsx(css.contactItem)}> {contact.name}</li>
        <li className={clsx(css.contactItem)}> {contact.number}</li>
      </ul>
      <button
        className={clsx(css.contactButton)}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;




