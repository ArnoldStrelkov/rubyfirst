class ApiController < ApplicationController
  
  
  def new_idea
   @idea = Idea.create(header: params[:header], body: params[:body], video: params[:video], user_id: @current_user.id)
   redirect_to root_url
  end
  
  def set_session
      
    req = request.env['omniauth.auth']
    user = User.where(provider: req.provider, uid: req.uid).first 
    
    unless user
      user =  User.create(name: req.info.name, provider: req.provider, uid: req.uid)
    end
    
    session[:user_id] = user.id
    redirect_to root_url
  end 
  
  def exit
     session[:user_id] = nil
     redirect_to root_url
  end 
  
  
  def susc
    i = Idea.find(params[:id])
    @current_user.follow_ideas.create(idea: i)
    redirect_to root_url
  end  
  
  
end
