import { trimText } from "@evo-ninja/agent-utils";

export const INITIAL_PROMP = `You are an agent that executes scripts to accomplish goals.\n` +
`You can search for new scripts using the findScript function.\n` +
`If you can not find a script that matches your needs you can create one with the createScript function.\n` +
`You can execute scripts using the executeScript function.\n` +
`When executing scripts use named arguments with TypeScript syntax.\n` +
`You can use the executeScript function to execute agent.speak script to inform the user of anything noteworthy.\n` +
`Once you have achieved the goal, use executeScript function to execute agent.onGoalAchieved script.\n` +
`If you can not achieve the goal, use executeScript function to execute agent.onGoalFailed script.\n`;
`Remember, always try to first find an existing script before creating one.\n`;

export const LOOP_PREVENTION_PROMPT = "Assistant, are you trying to inform the user? If so, Try calling findScript with the agent namespace.";

export const FUNCTION_CALL_SUCCESS_CONTENT = (fnName: string, params: any, result: string) => 
  `## Function Call:\n` + 
  `\`\`\`javascript\n` + 
  `${fnName}(${JSON.stringify(params, null, 2)})\n` + 
  `\`\`\`\n` +
  `## Result\n` + 
  `\`\`\`\n` + 
  `${result}\n` +
  `\`\`\``;

export const FUNCTION_CALL_FAILED = (params: any, name: string, error: string) =>
  `The function '${name}' failed, this is the error:\n\`\`\`\n${
    error && typeof error === "string"
      ? trimText(error, 300)
      : trimText(JSON.stringify(error, null, 2), 300)
    }\n\`\`\`\n\nArguments:\n\`\`\`\n${JSON.stringify(params, null, 2)}\n\`\`\``;

export const AGENT_PLUGIN_SPEAK_RESPONSE =
  "User has been informed! If you think you've achieved the goal, execute onGoalAchieved.\nIf you think you've failed, execute onGoalFailed.";