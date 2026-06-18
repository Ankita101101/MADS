const Sidebar = ({ activeSection, setActiveSection }) => {

  return (

    <div className="w-72 min-h-screen border-r border-cyan-500/20 bg-black/30 backdrop-blur-md p-6 flex flex-col">

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-cyan-400 text-3xl font-bold leading-tight">
          Mobile Application Development and Security
        </h1>

        <h2 className="text-white text-2xl font-semibold mt-1">
          DBFS
        </h2>

        <p className="text-gray-400 text-sm mt-2">
          by Ankita Kumari
        </p>

      </div>



      {/* MENU */}

      <div className="space-y-4 overflow-y-auto">

        {/* UNIT 1 */}

        <div
          onClick={() => setActiveSection("unit1")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "unit1"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Unit 1
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Fundamentals of Android Application Development
          </p>

        </div>



        {/* UNIT 2 */}

        <div
          onClick={() => setActiveSection("unit2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "unit2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Unit 2
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Java Programming for Android Development
          </p>

        </div>

        {/* UNIT 3 */}

        <div
          onClick={() => setActiveSection("unit3")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "unit3"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Unit 3
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Android Framework and Architecture
          </p>

        </div>

        {/* UNIT 4 */}

        <div
          onClick={() => setActiveSection("unit4")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "unit4"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Unit 4
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Android Application Development and Security
          </p>

        </div>

        {/* PDF UNIT 1 */}

        <div
          onClick={() => setActiveSection("pdf1")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "pdf1"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            PDF Unit 1
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Unit 1 Study Materials
          </p>

        </div>



        {/* PDF UNIT 2 */}

        <div
          onClick={() => setActiveSection("pdf2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "pdf2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            PDF Unit 2
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Unit 2 Study Materials
          </p>

        </div>

        {/* PDF UNIT 3 */}

        <div
          onClick={() => setActiveSection("pdf2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "pdf2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            PDF Unit 3
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Unit 3 Study Materials
          </p>

        </div>

        {/* PDF UNIT 4 */}

        <div
          onClick={() => setActiveSection("pdf2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "pdf2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            PDF Unit 4
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Unit 4 Study Materials
          </p>

        </div>

        {/* PRACTICAL 1 */}

        <div
          onClick={() => setActiveSection("practical1")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical1"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 1
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            To develop an Android application using SMS Manager API for sending and receiving text messages.
          </p>

        </div>



        {/* PRACTICAL 2 */}

        <div
          onClick={() => setActiveSection("practical2")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical2"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 2
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            To develop an Android application using Telephony Manager for retrieving device and network information.
          </p>

        </div>



        {/* PRACTICAL 3 */}

        <div
          onClick={() => setActiveSection("practical3")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical3"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 3
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            To implement different types of animations (Fade, Zoom, Rotate and Slide) in an Android application.
          </p>

        </div>



        {/* PRACTICAL 4 */}

        <div
          onClick={() => setActiveSection("practical4")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical4"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 4
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            To develop an Android application for playing audio files using Android Media Player services.
          </p>

        </div>



        {/* PRACTICAL 5 */}

        <div
          onClick={() => setActiveSection("practical5")}
          className={`p-4 rounded-2xl cursor-pointer transition border ${
            activeSection === "practical5"
              ? "bg-cyan-500/20 border-cyan-400"
              : "bg-white/5 border-cyan-500/20 hover:bg-cyan-500/10"
          }`}
        >

          <h3 className="text-lg font-semibold text-white">
            Practical 5
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            To analyze Android application permissions and understand the Android permission model.
          </p>

        </div>

      </div>

    </div>

  );
};

export default Sidebar;