
interface ModelProps {
    modelOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode
}

const Model: React.FC<ModelProps> = ({ modelOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modelOpen ? "modal-open" : "" }`} role="dialog">
  <div className="modal-box">
    {children}
    <div className="modal-action">
      <label onClick={() => setModalOpen(false)} className="btn">Close</label>
    </div>
  </div>
</div>
  )
};

export default Model;