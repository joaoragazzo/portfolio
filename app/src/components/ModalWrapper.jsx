export const ModalWrapper = ({ children }) => {
  return (
    <div class="fixed inset-0 bg-black/80 z-50 overflow-y-auto">
      <div class="min-h-screen flex items-center justify-center p-4">
        <div class="bg-slate-800 rounded-xl max-w-4xl w-full border border-slate-700 max-h-[90vh] overflow-y-auto">
            { children }
        </div>
      </div>
    </div>
  );
};
