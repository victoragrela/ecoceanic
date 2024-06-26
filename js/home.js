window.watsonAssistantChatOptions = {
    integrationID: "30d50dcf-1915-47fc-8fa7-11a33e37f979", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "7fb5cf00-eeee-4edf-b7c8-d9198d5a9045", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });