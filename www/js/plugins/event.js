def intro(mv) #img -��� ��������, ��������, ��������� ��� ������.
 begin
  Graphics.freeze # ���������� � ���������� ����������� 
  @intro = Sprite.new 
  # ��������� ���������� ����������� 
  @intro.bitmap = RPG::Cache.picture(img) 
  Graphics.transition(100) 
  # ����� �� 4 ������� 
  i = 4 # 1 ������� = 20 ������(4 ������� * 20 ������ = 80 ������) 
  while i > 0 
   Graphics.update # ���������� ������ � ����� �� 1 ���� 
   i -= 1 # ������� �� i ���� ���� 
  end
  Graphics.freeze # ���������� � ��������� ����������� 
  # ��������� ��������� ����������� 
  @intro.bitmap = RPG::Cache.picture("") 
  Graphics.transition(100) 
  # �������� ����������� 
  @intro.bitmap.dispose
  @intro.dispose
 end 
end