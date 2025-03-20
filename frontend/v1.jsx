import React from "react";

const App = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen transition-colors duration-300">
      <nav className="border-b border-gray-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="flex items-center space-x-4 py-3">
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>All Tasks</option>
              <option>High Priority</option>
              <option>Due Soon</option>
              <option>My Tasks</option>
            </select>
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>Sort by Date</option>
              <option>Sort by Priority</option>
              <option>Sort by Assignee</option>
            </select>
          </div> */}
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo"/>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="!rounded-button bg-gray-800 p-2 hover:bg-gray-700 mr-4" id="theme-toggle">
                <i className="fas fa-moon text-gray-400"></i>
              </button>
              <button className="!rounded-button bg-gray-800 p-2 hover:bg-gray-700">
                <i className="fas fa-bell text-gray-400"></i>
              </button>
              <button className="!rounded-button bg-gray-800 p-2 hover:bg-gray-700">
                <i className="fas fa-cog text-gray-400"></i>
              </button>
              <div className="flex items-center">
                <img className="h-8 w-8 rounded-full" src="data:image/jpeg;base64,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" alt="User"/>
              </div>
            </div>
          </div>

          {/* this section is for cpoied section */}
          <div className="flex items-center space-x-4 py-3">
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>All Tasks</option>
              <option>High Priority</option>
              <option>Due Soon</option>
              <option>My Tasks</option>
            </select>
            <select className="bg-gray-800 text-gray-100 rounded-lg px-3 py-1.5 text-sm">
              <option>Sort by Date</option>
              <option>Sort by Priority</option>
              <option>Sort by Assignee</option>
            </select>


            <button className="bg-custom hover:bg-custom/90 text-gray-100 rounded-lg px-4 py-2 text-sm">
            <i className="fas fa-plus mr-2"></i>Add Column
          </button>
          </div>
          {/* <button className="bg-custom hover:bg-custom/90 text-white px-4 py-2 rounded-lg transition-colors mb-4" id="add-column-btn">
            <i className="fas fa-plus mr-2"></i>Add Column
          </button> */}
        </div>
      </nav>

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 bg-gray-800 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Project Progress</h2>
            <span className="text-sm text-gray-400">67% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-custom rounded-full h-2" style={{width: "67%"}}></div>
          </div>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="inline-flex space-x-6 min-w-full">
            {/* To Do Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">To Do</h2>
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">4</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-yellow-500 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg">
                    <h3 className="font-medium mb-2">Design new landing page</h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a young creative designer with artistic style&flag=aab55676-6868-4377-b621-296bb0443b5f" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Sarah K.</span>
                      </div>
                      <span className="text-sm bg-red-500/20 text-red-400 px-2 py-0.5 rounded">Overdue</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      <i className="fas fa-comment-alt mr-1"></i> 3 comments
                    </div>
                    <div className="text-sm text-gray-400">
                      <i className="fas fa-at mr-1"></i> @mike.r, @lisa.m mentioned
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-red-500 cursor-pointer hover:bg-gray-800 transition-colors">
                    <h3 className="font-medium mb-2">Update API documentation</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a male developer with glasses, wearing a casual tech company t-shirt, against a neutral background&width=100&height=100&orientation=squarish&flag=1bc2e432-d545-4882-86b8-350904faec45&flag=9003f014-1ac0-4507-aa91-67cbdf84e78d&flag=51951358-b738-48e1-b3e4-7a3a4e692c39&flag=967dc329-1dbc-4ff2-9969-ec3ca940d017" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Mike R.</span>
                      </div>
                      <span className="text-sm text-gray-400">Due in 3 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* In Progress Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">In Progress</h2>
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">3</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-blue-500 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg">
                    <h3 className="font-medium mb-2">Implement user authentication</h3>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a female software engineer&flag=12814b89-ca14-4b13-8093-c645ce5b1a20" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Lisa M.</span>
                      </div>
                      <span className="text-sm bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">Due soon</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      <i className="fas fa-comment-alt mr-1"></i> 5 comments
                    </div>
                    <div className="text-sm text-gray-400">
                      <i className="fas fa-at mr-1"></i> @sarah.k mentioned
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Done Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Done</h2>
                  <span className="bg-gray-700 px-2 py-1 rounded-full text-sm">2</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg border-l-4 border-green-500 cursor-pointer hover:bg-gray-800 transition-all duration-200 hover:translate-y-[-2px] hover:shadow-lg">
                    <h3 className="font-medium mb-2">Setup CI/CD pipeline</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a DevOps engineer with a technical background, wearing a casual tech company hoodie, against a neutral background&width=100&height=100&orientation=squarish&flag=0d8edf7e-fb73-4687-aadf-590d844862e0&flag=840273f2-bfe6-450b-9ba2-98b37b6693a9&flag=c5ee8d63-7041-4fa2-a92e-e6d8063b586e&flag=8f724674-9934-46ba-849d-6e7a84a4f889" alt="Assignee"/>
                        <span className="text-sm text-gray-400">Alex W.</span>
                      </div>
                      <span className="text-sm text-gray-400">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Log Column */}
            <div className="w-80 flex-none">
              <div className="bg-gray-800 rounded-lg p-4 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Activity Log</h2>
                  <i className="fas fa-sync-alt text-gray-400 cursor-pointer hover:text-gray-200"></i>
                </div>
                <div className="space-y-4">
                  <div className="text-sm text-gray-300">
                    <div className="flex items-center space-x-2 mb-1">
                      <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=profile1&flag=9ee5ca11-2271-4f20-80da-ca0b8a66d667" alt="User"/>
                      <span className="font-medium">Sarah K.</span>
                      <span className="text-gray-400">moved</span>
                      <span className="font-medium">Design new landing page</span>
                    </div>
                    <span className="text-gray-400 text-xs">2 minutes ago</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    <div className="flex items-center space-x-2 mb-1">
                      <img className="h-6 w-6 rounded-full" src="https://creatie.ai/ai/api/search-image?query=profile2&flag=7ab4bbcc-595b-4a11-ab23-172251e9d279" alt="User"/>
                      <span className="font-medium">Mike R.</span>
                      <span className="text-gray-400">commented on</span>
                      <span className="font-medium">Update API documentation</span>
                    </div>
                    <span className="text-gray-400 text-xs">15 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <button className="fixed bottom-8 right-8 !rounded-button bg-custom hover:bg-custom/90 text-white p-4 shadow-lg">
        <i className="fas fa-plus text-lg"></i>
      </button>

      {/* Task Modal */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input type="text" className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom" placeholder="Enter task title (@mention teammates)"/>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom" rows="3" placeholder="Enter task description (@mention teammates)"></textarea>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Assignee</label>
                <select className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom">
                  <option>Select assignee</option>
                  <option>Sarah K.</option>
                  <option>Mike R.</option>
                  <option>Lisa M.</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Due Date</label>
                <input type="date" className="w-full bg-gray-700 border-gray-600 rounded-lg focus:ring-custom focus:border-custom"/>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button type="button" className="!rounded-button px-4 py-2 bg-gray-700 hover:bg-gray-600">Cancel</button>
              <button type="submit" className="!rounded-button px-4 py-2 bg-custom hover:bg-custom/90">Create Task</button>
            </div>
          </form>
        </div>
      </div>

      {/* Task Detail Modal */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" id="task-detail-modal">
        <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Task Details</h2>
            <button className="text-gray-400 hover:text-gray-200">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Subtasks</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2"/>
                  <span>Research competitor landing pages</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2"/>
                  <span>Create wireframes</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Comments</h3>
              <div className="space-y-3">
                <div className="flex space-x-3">
                  <img className="h-8 w-8 rounded-full" src="data:image/jpeg;base64,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"/>
                  <div>
                    <p className="text-sm">Looking good! Let's review this together.</p>
                    <span className="text-xs text-gray-400">2 hours ago</span>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <textarea className="w-full bg-gray-700 border-gray-600 rounded-lg" placeholder="Add a comment..."></textarea>
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Attachments</h3>
              <div className="flex items-center space-x-2">
                <i className="fas fa-file-pdf text-red-400"></i>
                <span className="text-sm">design-brief.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;