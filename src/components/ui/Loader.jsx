export default function Loader({ full }) {
  return (
    <div className={`flex items-center justify-center ${full ? 'min-h-[60vh]' : 'py-10'}`}>
      <div className="h-10 w-10 rounded-full border-4 border-plum-200 border-t-plum-700 animate-spin" />
    </div>
  );
}
