export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-indigo-100">
      <div className="bg-white shadow-xl rounded-xl p-4 w-[400px]">
        {/* Encabezado */}
        <div className="flex justify-between text-gray-500 text-sm mb-2">
          <span>Tue Feb 18 2025</span>
          <span>9:31:25 p.m.</span>
        </div>

        <h1 className="text-lg font-bold text-gray-900 mb-2">List Tailwind</h1>

        {/* Días */}
        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4">
          <div className="text-black rounded-lg py-1">s<br />24</div>
          <div className="text-black rounded-lg py-1">m<br />25</div>
          <div className="text-black rounded-lg py-1">t<br />26</div>
          <div className="text-black rounded-lg py-1">w<br />27</div>
          <div className="text-black rounded-lg py-1">t<br />28</div>
          <div className="text-black rounded-lg py-1">f<br />29</div>
          <div className="text-black rounded-lg py-1">s<br />30</div>
        </div>

        {/* Lista de tareas */}
        <div className="space-y-3">
          {/* Completada */}
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-lg px-3 py-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="line-through text-gray-500">take out the trash</span>
            </div>
            <div className="flex items-center justify-center bg-blue-100 rounded-lg px-3 py-2">
              <span className="text-sm text-gray-600">9:00 AM</span>
            </div>
          </div>

          {/* Completada */}
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-lg px-3 py-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="line-through text-gray-500">do homework</span>
            </div>
            <div className="flex items-center justify-center bg-blue-100 rounded-lg px-3 py-2">
              <span className="text-sm text-gray-600">12:00 PM</span>
            </div>
          </div>

          {/* Pendientes */}
          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-lg px-3 py-2">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
              <span className="text-gray-800">go to grocery store</span>
            </div>
            <div className="flex items-center justify-center bg-blue-100 rounded-lg px-3 py-2">
              <span className="text-sm text-gray-600">1:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-lg px-3 py-2">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
              <span className="text-gray-800">run 5 kilometers</span>
            </div>
            <div className="flex items-center justify-center bg-blue-100 rounded-lg px-3 py-2">
              <span className="text-sm text-gray-600">4:20 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-lg px-3 py-2">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
              <span className="text-gray-800">load the dishwasher</span>
            </div>
            <div className="flex items-center justify-center bg-blue-100 rounded-lg px-3 py-2">
              <span className="text-sm text-gray-600">9:00 PM</span>
            </div>
          </div>

          <div className="grid grid-cols-[2fr_1fr] gap-2">
            <div className="flex items-center gap-2 bg-indigo-100 rounded-lg px-3 py-2">
              <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
              <span className="text-gray-800">Take out the trash</span>
            </div>
            <div className="flex items-center justify-center bg-blue-100 rounded-lg px-3 py-2">
              <span className="text-sm text-gray-600">9:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
