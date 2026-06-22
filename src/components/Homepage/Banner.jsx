

const Banner = () => {
    return (
        
<div className="pt-16">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-3xl font-bold">Friends to keep close in your life</h1>
      <p className="py-4 text-sm text-[#64748B]">
      
       Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
       relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white">+ Add a Friend</button>
    </div>
  </div>
  {/* Stats Cards */}
  <div>
  <div className="w-full max-w-5xl px-4 py-6 mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="bg-white rounded-md shadow-sm border border-gray-100 py-4 text-center">
        <h2 className="text-3xl font-semibold text-green-900">10</h2>
        <p className="text-xs text-gray-500 mt-2">Total Friends</p>
      </div>

      <div className="bg-white rounded-md shadow-sm border border-gray-100 py-4 text-center">
        <h2 className="text-3xl font-semibold text-green-900">3</h2>
        <p className="text-xs text-gray-500 mt-2">On Track</p>
      </div>

      <div className="bg-white rounded-md shadow-sm border border-gray-100 py-4 text-center">
        <h2 className="text-3xl font-semibold text-green-900">6</h2>
        <p className="text-xs text-gray-500 mt-2">Need Attention</p>
      </div>

      <div className="bg-white rounded-md shadow-sm border border-gray-100 py-4 text-center">
        <h2 className="text-3xl font-semibold text-green-900">12</h2>
        <p className="text-xs text-gray-500 mt-2">
          Interactions This Month
        </p>
      </div>
    </div>
  </div>
</div>
</div>
    
    );
};

export default Banner;