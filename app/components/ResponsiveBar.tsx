import Dock from './Sidebar';
import MiniBar from './SpeedDial';

const ResponsiveBar = () => {
  return (
    <>
        <div className="hidden custom:block">
            <Dock />
        </div>
        <div className="block custom:hidden">
            <MiniBar />
        </div>
    </>
  );
}

export default ResponsiveBar;
