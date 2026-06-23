import { Link } from "react-router-dom";
import { use } from "react";

const friendPromise = fetch("/data/friends.json")
  .then((res) => res.json());

const Friends = () => {
  const friends = use(friendPromise);

  const statusStyles = {
    "on track": "badge-neutral",
    "almost due": "badge-warning",
    overdue: "badge-error",
  };

  return (
    <div className="my-20">
      <h3 className="font-bold text-2xl text-center mb-10">
        Your Friends
      </h3>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 w-10/12 mx-auto gap-5">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            to={`/FriendsDetails/${friend.id}`}
            className="card bg-base-100 shadow-sm"
          >
            <figure className="px-10 pt-10">
              <img
                src={friend.picture}
                alt={friend.name}
                className="rounded-full"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{friend.name}</h2>

              <p>{friend.days_since_contact}d ago</p>

              <div className="flex gap-2 flex-wrap justify-center">
                {friend.tags.map((tag, index) => (
                  <div key={index} className="badge badge-success">
                    {tag}
                  </div>
                ))}
              </div>

              <div
                className={`badge mt-2 ${
                  statusStyles[friend.status?.toLowerCase()] ||
                  "badge-neutral"
                }`}
              >
                {friend.status}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friends;