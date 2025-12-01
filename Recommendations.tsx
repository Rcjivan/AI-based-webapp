import { cn } from "~/lib/utils";

const Recommendations = ({ roles }: { roles: RoleRecommendation[] }) => {
  return (
    <div className="flex flex-col gap-6 w-full">
      {roles.map((role, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-2xl font-semibold">{role.jobTitle}</h3>
            <div
              className={cn(
                "score-badge",
                role.matchPercentage >= 70
                  ? "bg-badge-green"
                  : role.matchPercentage >= 50
                  ? "bg-badge-yellow"
                  : "bg-badge-red"
              )}
            >
              <img
                src={role.matchPercentage >= 70 ? "/icons/check.svg" : "/icons/warning.svg"}
                alt="score"
                className="size-4"
              />
              <p className={cn(
                role.matchPercentage >= 70 ? "text-badge-green-text" : role.matchPercentage >= 50 ? "text-badge-yellow-text" : "text-badge-red-text",
                "text-sm font-medium"
              )}>{role.matchPercentage}% match</p>
            </div>
          </div>

          <p className="text-gray-600 mt-2">{role.reasonForFit}</p>

          <div className="grid grid-cols-2 gap-4 mt-4 max-lg:grid-cols-1">
            <div>
              <p className="text-lg font-semibold">Required Skills</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {role.requiredSkills.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Missing Skills</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {role.missingSkills.map((s, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 max-lg:grid-cols-1">
            <div>
              <p className="text-lg font-semibold">Industry Fit</p>
              <p className="text-gray-600 mt-1">{role.industryFit}</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Salary Expectation</p>
              <p className="text-gray-600 mt-1">{role.salaryExpectation.currency} {role.salaryExpectation.range}</p>
              {role.salaryExpectation.note && <p className="text-gray-500 text-sm">{role.salaryExpectation.note}</p>}
            </div>
            <div>
              <p className="text-lg font-semibold">Career Growth Path</p>
              <ul className="list-disc ml-5 mt-1 text-gray-600">
                {role.careerGrowthPath.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-lg font-semibold">Improvement Suggestions</p>
            <ul className="list-disc ml-5 mt-1 text-gray-600">
              {role.improvementSuggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;